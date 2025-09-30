import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import { requireAuth } from "@/lib/auth";
import { PostFormValues } from "@/types/backend";
import { Category } from "@/types/SchoolTypes";
import type { UploadApiResponse } from "cloudinary";

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

type BlockToCreate = {
  type: "PARAGRAPH" | "VIDEO" | "IMAGE";
  order: number;
  content?: string;
  image?: {
    create: {
      url: string;
      publicId: string;
      caption: string;
    };
  };
};

export async function POST(req: Request) {
  try {
    const user = requireAuth(req);
    if (!user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { title, category, style, author, blocks, files } =
      await parseFormData(req);

    const createdBlocks: BlockToCreate[] = [];

    let fileIndex = 0;

    for (const [i, block] of blocks.entries()) {
      const order = block.order || i + 1;

      if (block.type === "PARAGRAPH" && block.content) {
        createdBlocks.push({
          type: "PARAGRAPH",
          order,
          content: block.content,
        });
      } else if (block.type === "VIDEO" && block.content) {
        createdBlocks.push({
          type: "VIDEO",
          order,
          content: block.content.trim(),
        });
      } else if (block.type === "IMAGE") {
        const file = files[fileIndex];
        if (!file) continue;

        const arrayBuffer = await file.arrayBuffer();
        const buffer = Buffer.from(arrayBuffer);

        const uploadRes: UploadApiResponse = await new Promise(
          (resolve, reject) => {
            cloudinary.uploader
              .upload_stream({ folder: "posts" }, (err, result) => {
                if (err || !result) reject(err);
                else resolve(result);
              })
              .end(buffer);
          }
        );

        createdBlocks.push({
          type: "IMAGE",
          order,
          image: {
            create: {
              url: uploadRes.secure_url,
              publicId: uploadRes.public_id,
              caption: block.caption || "Uploaded image",
            },
          },
        });

        fileIndex++;
      }
    }

    const createdPost = await prisma.post.create({
      data: {
        title,
        category,
        style,
        author,
        blocks: { create: createdBlocks },
      },
      include: { blocks: { include: { image: true } } },
    });

    return NextResponse.json({ message: "Post created", post: createdPost });
  } catch (err) {
    console.error("POST error:", err);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
