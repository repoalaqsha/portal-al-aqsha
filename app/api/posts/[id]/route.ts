// app/api/posts/[id]/route.ts

import { requireAuth } from "@/lib/auth";
import cloudinary from "@/lib/cloudinary";
import { prisma } from "@/lib/prisma";
import { PostFormValues } from "@/types/backend";
import { Category } from "@/types/SchoolTypes";
import { NextResponse } from "next/server";
import type { UploadApiResponse } from "cloudinary";
import type { Prisma } from "@prisma/client";

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

    const { title, author, category, style, blocks, files } =
      await parseFormData(req);

    // Ambil semua blok lama dari DB
    const oldBlocks = await prisma.postBlock.findMany({
      where: { postId },
      include: { image: true },
    });

    const keepBlockIds: string[] = [];
    const updatePromises: Promise<unknown>[] = [];
    let fileIndex = 0;

    for (const [i, block] of blocks.entries()) {
      const existingBlock = block.id
        ? oldBlocks.find((b: (typeof oldBlocks)[number]) => b.id === block.id)
        : undefined;

      // Tangani paragraph
      if (block.type === "PARAGRAPH" && block.content) {
        if (existingBlock) {
          updatePromises.push(
            prisma.postBlock.update({
              where: { id: block.id },
              data: {
                type: "PARAGRAPH",
                content: block.content,
                order: i + 1,
              },
            })
          );
          keepBlockIds.push(block.id);
        } else {
          updatePromises.push(
            prisma.postBlock.create({
              data: {
                type: "PARAGRAPH",
                content: block.content,
                order: i + 1,
                postId,
              },
            })
          );
        }
      }

      // Tangani video
      else if (block.type === "VIDEO" && block.content) {
        if (existingBlock) {
          updatePromises.push(
            prisma.postBlock.update({
              where: { id: block.id },
              data: {
                type: "VIDEO",
                content: block.content.trim(),
                order: i + 1,
              },
            })
          );
          keepBlockIds.push(block.id);
        } else {
          updatePromises.push(
            prisma.postBlock.create({
              data: {
                type: "VIDEO",
                content: block.content.trim(),
                order: i + 1,
                postId,
              },
            })
          );
        }
      }

      // Tangani image
      else if (block.type === "IMAGE") {
        let imageUrl = existingBlock?.image?.url || block.url;
        let publicId = existingBlock?.image?.publicId || block.publicId;

        // Upload baru jika ada file
        if (files[fileIndex]) {
          const arrayBuffer = await files[fileIndex].arrayBuffer();
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

          // Hapus lama
          if (publicId) await cloudinary.uploader.destroy(publicId);

          imageUrl = uploadRes.secure_url;
          publicId = uploadRes.public_id;
          fileIndex++;
        }

        if (existingBlock && imageUrl) {
          updatePromises.push(
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
          updatePromises.push(
            prisma.postBlock.create({
              data: {
                type: "IMAGE",
                order: i + 1,
                postId,
                image: {
                  create: {
                    url: imageUrl,
                    publicId,
                    caption: block.caption || "",
                  },
                },
              },
            })
          );
        }
      }
    }

    // Hapus block lama yang tidak dipakai
    const deleteBlocks = oldBlocks.filter(
      (b: (typeof oldBlocks)[number]) => !keepBlockIds.includes(b.id)
    );
    for (const b of deleteBlocks) {
      if (b.image?.publicId)
        await cloudinary.uploader.destroy(b.image.publicId);
      updatePromises.push(prisma.postBlock.delete({ where: { id: b.id } }));
    }

    await Promise.all(updatePromises);

    // Update post utama
    const updatedPost = await prisma.post.update({
      where: { id: postId },
      data: { title, author, category, style },
      include: { blocks: { include: { image: true } } },
    });

    return NextResponse.json({ message: "Post updated", post: updatedPost });
  } catch (err) {
    console.error("PUT error:", err);
    return NextResponse.json(
      { error: "Failed to update post" },
      { status: 500 }
    );
  }
}
