import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import { requireAuth } from "@/lib/auth";

// GET single teacher
export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const teacher = await prisma.teacher.findUnique({
      where: { id: params.id },
    });

    if (!teacher) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    return NextResponse.json(teacher);
  } catch (error) {
    console.error("Get teacher error:", error);
    return NextResponse.json(
      { error: "Failed to fetch teacher" },
      { status: 500 }
    );
  }
}

// UPDATE teacher
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
     const user = requireAuth(req);
      if (!user)
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    const formData = await req.formData();
    const nip = formData.get("nip") as string | null;
    const name = formData.get("name") as string | null;
    let jabatan = formData.get("jabatan") as string | null;
    jabatan = jabatan ? jabatan.toLowerCase() : null;
    const pesan = formData.get("pesan") as string | null;
    const file = formData.get("image") as File | null;

    const teacher = await prisma.teacher.findUnique({
      where: { id: params.id },
    });

    if (!teacher) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    let imageUrl = teacher.imageUrl;
    let publicId = teacher.publicId;

    // kalau ada file baru, upload ke Cloudinary
    if (file) {
      // hapus dulu file lama dari cloudinary
      if (publicId) {
        await cloudinary.uploader.destroy(publicId);
      }

      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const uploadRes = await new Promise<{
        secure_url: string;
        public_id: string;
      }>((resolve, reject) => {
        cloudinary.uploader
          .upload_stream({ folder: "teachers" }, (error, result) => {
            if (error || !result)
              return reject(error || new Error("No result from Cloudinary"));
            resolve({
              secure_url: result.secure_url,
              public_id: result.public_id,
            });
          })
          .end(buffer);
      });

      imageUrl = uploadRes.secure_url;
      publicId = uploadRes.public_id;
    }

    const updated = await prisma.teacher.update({
      where: { id: params.id },
      data: {
        nip: nip ?? teacher.nip,
        name: name ?? teacher.name,
        jabatan: jabatan ?? teacher.jabatan,
        pesan: pesan ?? teacher.pesan,
        imageUrl,
        publicId,
      },
    });

    return NextResponse.json(updated);
  } catch (error) {
    console.error("Update teacher error:", error);
 if (
   typeof error === "object" &&
   error !== null &&
   "code" in error &&
   error.code === "P2002"
 ) {
   return NextResponse.json({ error: "NIP already exists" }, { status: 409 });
 }

 return NextResponse.json(
   { error: "Failed to update teacher" },
   { status: 500 }
 );
  }
}

// DELETE teacher
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const teacher = await prisma.teacher.findUnique({
      where: { id: params.id },
    });

    if (!teacher) {
      return NextResponse.json({ error: "Teacher not found" }, { status: 404 });
    }

    // hapus foto dari cloudinary kalau ada
    if (teacher.publicId) {
      await cloudinary.uploader.destroy(teacher.publicId);
    }

    await prisma.teacher.delete({ where: { id: params.id } });

    return NextResponse.json({ message: "Teacher deleted" });
  } catch (error) {
    console.error("Delete teacher error:", error);
    return NextResponse.json(
      { error: "Failed to delete teacher" },
      { status: 500 }
    );
  }
}
