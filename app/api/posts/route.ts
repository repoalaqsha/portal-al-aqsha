import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import { requireAuth } from "@/lib/auth";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const category = searchParams.get("category"); // optional
  const limit = parseInt(searchParams.get("limit") || "3", 10);
  const cursor = searchParams.get("cursor"); // optional

  const posts = await prisma.post.findMany({
    where: {
      ...(category ? { category: category as any } : {}),
    },
    take: limit + 1, // ambil lebih 1 untuk cek hasNextPage
    ...(cursor ? { skip: 1, cursor: { id: cursor } } : {}),

    orderBy: { createdAt: "desc" },
    include: { blocks: { include: { image: true } } },
  });

  let nextCursor: string | null = null;
  if (posts.length > limit) {
    const nextItem = posts.pop(); // buang extra
    nextCursor = nextItem?.id || null;
  }

  return NextResponse.json({
    posts,
    nextCursor,
  });
}

async function parseFormData(req: Request) {
  const formData = await req.formData();

  const blocks = JSON.parse(formData.get("blocks") as string);

  const files: File[] = formData.getAll("files") as File[];

  return {
    title: formData.get("title") as string,
    category: (formData.get("category") as string)?.toUpperCase(),
    style: parseInt(formData.get("style") as string, 10) || 1,
    author: formData.get("author") as string,
    blocks,
    files,
  };
}

export async function POST(req: Request) {
  try {
    const user = requireAuth(req);
    if (!user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { title, category, style, author, blocks, files } =
      await parseFormData(req);


    if (!category) {
      throw new Error("Category is required");
    }

    const createdPost = await prisma.post.create({
      data: {
        title,
        category: category as any,
        style,
        author,
        blocks: {
          create: await Promise.all(
            blocks.map(async (block: any, index: number) => {
              if (block.type === "PARAGRAPH") {
                return {
                  type: "PARAGRAPH",
                  order: block.order || index + 1,
                  content: block.content,
                };
              }
              if (block.type === "VIDEO") {
                return {
                  type: "VIDEO",
                  order: block.order || index + 1,
                  content: block.content?.trim() || "",
                };
              }

              if (block.type === "IMAGE") {
                const file = files.length > 0 ? files.shift() : null;

                let imageUrl = null;
                let publicId = null;
                if (file) {
                  const arrayBuffer = await file.arrayBuffer();
                  const buffer = Buffer.from(arrayBuffer);

                  const uploadRes: any = await new Promise(
                    (resolve, reject) => {
                      cloudinary.uploader
                        .upload_stream({ folder: "posts" }, (err, result) => {
                          if (err) reject(err);
                          else resolve(result);
                        })
                        .end(buffer);
                    }
                  );

                  imageUrl = uploadRes.secure_url;
                  publicId = uploadRes.public_id;
                }

                return {
                  type: "IMAGE",
                  order: block.order || index + 1,
                  image: {
                    create: {
                      url: imageUrl,
                      publicId,
                      caption: block.caption || "Uploaded image",
                    },
                  },
                };
              }
              return null;
            })
          ),
        },
      },
      include: { blocks: { include: { image: true } } },
    });

    return NextResponse.json({
      message: "Post created",
      createdPost,
      code: 200,
    });
  } catch (err) {
    console.error("Error creating post:", err);
    return NextResponse.json(
      { error: "Failed to create post" },
      { status: 500 }
    );
  }
}
