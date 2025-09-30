// app/api/posts/[id]/route.ts

import { requireAuth } from "@/lib/auth";
import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { PostFormValues } from "@/types/backend";
import { Category } from "@/types/SchoolTypes";
import { NextResponse } from "next/server";
import type { UploadApiResponse } from "cloudinary";
import { Prisma } from "@prisma/client";

export async function GET(req: Request) {
  try {
    const { pathname } = new URL(req.url);
    const id = pathname.split("/").pop() as string;

    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        blocks: {
          orderBy: { order: "asc" },
          include: { image: true },
        },
      },
    });

    if (!post) {
      return NextResponse.json(
        { error: "Post tidak ditemukan" },
        { status: 404 }
      );
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("❌ GET Post error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}


export async function DELETE(req: Request) {
  try {
    const user = requireAuth(req);
    if (!user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const { pathname } = new URL(req.url);
    const id = pathname.split("/").pop() as string;

    // Hapus semua images terkait
    const images = await prisma.image.findMany({
      where: { block: { postId: id } },
    });

    for (const img of images) {
      if (img.publicId) {
        try {
          await cloudinary.uploader.destroy(img.publicId);
        } catch (err) {
          console.error("❌ Cloudinary delete failed:", err);
        }
      }
    }

    await prisma.post.delete({ where: { id } });

    return NextResponse.json({ message: "✅ Post deleted", success: true });
  } catch (error) {
    console.error("❌ Delete post error:", error);
    return NextResponse.json(
      { error: "Failed to delete post" },
      { status: 500 }
    );
  }
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

export async function PUT(
  req: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const user = requireAuth(req);
    if (!user)
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

    const { id } = await context.params;
    const postId = id;

    const { title, author, category, style, blocks, files }: PostFormValues =
      await parseFormData(req);

    const oldBlocks = await prisma.postBlock.findMany({
      where: { postId },
      include: { image: true },
    });

    let fileIndex = 0;
    const createBlocks: Prisma.PostBlockCreateWithoutPostInput[] = [];
    const updateBlocks: Promise<unknown>[] = [];
    const keepBlockIds: string[] = [];

    for (const [i, block] of blocks.entries()) {
      const existingBlock = block.id
        ? oldBlocks.find((b) => b.id === block.id)
        : null;

      if (block.type === "PARAGRAPH" && block.content) {
        if (existingBlock) {
          updateBlocks.push(
            prisma.postBlock.update({
              where: { id: block.id },
              data: {
                type: "PARAGRAPH",
                order: i + 1,
                content: block.content,
              },
            })
          );
          keepBlockIds.push(block.id);
        } else {
          createBlocks.push({
            type: "PARAGRAPH",
            order: i + 1,
            content: block.content,
          });
        }
      } else if (block.type === "VIDEO" && block.content) {
        if (existingBlock) {
          updateBlocks.push(
            prisma.postBlock.update({
              where: { id: block.id },
              data: {
                type: "VIDEO",
                order: i + 1,
                content: block.content.trim(),
              },
            })
          );
          keepBlockIds.push(block.id);
        } else {
          createBlocks.push({
            type: "VIDEO",
            order: i + 1,
            content: block.content.trim(),
          });
        }
      } else if (block.type === "IMAGE") {
        let imageUrl = existingBlock?.image?.url || block.url;
        let publicId = existingBlock?.image?.publicId || block.publicId;

        if (files[fileIndex]) {
          // upload baru
          const arrayBuffer = await files[fileIndex].arrayBuffer();
          const buffer = Buffer.from(arrayBuffer);

          const uploadRes: UploadApiResponse = await new Promise(
            (resolve, reject) => {
              cloudinary.uploader
                .upload_stream({ folder: "posts" }, (error, result) => {
                  if (error || !result) reject(error);
                  else resolve(result);
                })
                .end(buffer);
            }
          );

          // hapus lama kalau ada
          if (publicId) {
            await cloudinary.uploader.destroy(publicId);
          }

          imageUrl = uploadRes.secure_url;
          publicId = uploadRes.public_id;
          fileIndex++;
        }

        if (existingBlock && imageUrl) {
          updateBlocks.push(
            prisma.postBlock.update({
              where: { id: block.id },
              data: {
                type: "IMAGE",
                order: i + 1,
                image: {
                  upsert: {
                    create: {
                      url: imageUrl,
                      publicId,
                      caption: block.caption || "",
                    },
                    update: {
                      url: imageUrl,
                      publicId,
                      caption: block.caption || "",
                    },
                  },
                },
              },
            })
          );
          keepBlockIds.push(block.id);
        } else if (imageUrl) {
          createBlocks.push({
            type: "IMAGE",
            order: i + 1,
            image: {
              create: {
                url: imageUrl,
                publicId,
                caption: block.caption || "",
              },
            },
          });
        }
      }
    }

    // 🔥 hapus block lama yang tidak dipakai lagi
    const deleteBlocks = oldBlocks.filter((b) => !keepBlockIds.includes(b.id));
    for (const b of deleteBlocks) {
      if (b.image?.publicId) {
        await cloudinary.uploader.destroy(b.image.publicId);
      }
      await prisma.postBlock.delete({ where: { id: b.id } });
    }

    // eksekusi update dan create
    await Promise.all(updateBlocks);

    const updated = await prisma.post.update({
      where: { id: postId },
      data: {
        title,
        author,
        category: category as Category,
        style,
        blocks: {
          create: createBlocks,
        },
      },
      include: { blocks: { include: { image: true } } },
    });

    return NextResponse.json({ message: "Post updated", post: updated });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}