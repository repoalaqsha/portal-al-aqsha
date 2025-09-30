import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import { requireAuth } from "@/lib/auth";
import { PostFormValues } from "@/types/backend";
import { BlockType, Category } from "@/types/SchoolTypes";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const categoryParam = searchParams.get("category");
  const category =
    categoryParam && Object.values(Category).includes(categoryParam as Category)
      ? (categoryParam as Category)
      : null;
  const limit = parseInt(searchParams.get("limit") || "3", 10);
  const cursor = searchParams.get("cursor");

  const posts = await prisma.post.findMany({
    where: {
      ...(category ? { category: category } : {}),
    },
    take: limit + 1,
    ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),

    orderBy: { createdAt: "desc" },
    include: { blocks: { include: { image: true } } },
  });

  let nextCursor: string | null = null;
  if (posts.length > limit) {
    const nextItem = posts.pop();
    nextCursor = nextItem?.id || null;
  }

  return NextResponse.json({
    posts,
    nextCursor,
  });
}

async function parseFormData(req: Request): Promise<PostFormValues> {
  const formData = await req.formData();

  return {
    title: formData.get("title") as string,
    category: (formData.get("category") as Category) || Category.BERITA,
    style: parseInt(formData.get("style") as string, 10) || 1,
    author: formData.get("author") as string,
    blocks: JSON.parse(formData.get("blocks") as string),
    files: formData.getAll("files") as File[],
  };
}

export async function POST(req: Request) {
  try {
    const user = requireAuth(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { title, category, style, author, blocks, files } =
      await parseFormData(req);

    if (!category) {
      throw new Error("Category is required");
    }

    const prismaBlocks = await Promise.all(
      blocks.map(async (block, index) => {
        const order = block.order || index + 1;

        switch (block.type) {
          case BlockType.PARAGRAPH:
            return {
              type: BlockType.PARAGRAPH,
              order,
              content: block.content || "",
            };

          case BlockType.VIDEO:
            return {
              type: BlockType.VIDEO,
              order,
              content: block.content?.trim() || "",
            };

          case BlockType.IMAGE: {
            const file = files.shift();
            if (!file) return null;

            const arrayBuffer = await file.arrayBuffer();
            const buffer = Buffer.from(arrayBuffer);

            const uploadRes: any = await new Promise((resolve, reject) => {
              cloudinary.uploader
                .upload_stream({ folder: "posts" }, (err, result) => {
                  if (err) reject(err);
                  else resolve(result);
                })
                .end(buffer);
            });

            return {
              type: BlockType.IMAGE,
              order,
              image: {
                create: {
                  url: uploadRes.secure_url,
                  publicId: uploadRes.public_id,
                  caption: block.caption || "Uploaded image",
                },
              },
            };
          }

          default:
            return null;
        }
      })
    );

    const createdPost = await prisma.post.create({
      data: {
        title,
        category,
        style,
        author,
        blocks: { create: prismaBlocks.filter(Boolean) as any },
      },
      include: { blocks: { include: { image: true } } },
    });

    return NextResponse.json(
      { message: "Post created", createdPost },
      { status: 200 }
    );
  } catch (err) {
    console.error("Error creating post:", err);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
