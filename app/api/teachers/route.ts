import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import cloudinary from "@/lib/cloudinary";
import { requireAuth } from "@/lib/auth";
import { Prisma } from "@prisma/client";

// GET all teachers
export async function GET() {
  try {
    const teachers = await prisma.teacher.findMany({
      orderBy: { name: "asc" },
    });
    return NextResponse.json(teachers);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch teachers" },
      { status: 500 }
    );
  }
}

// CREATE teacher with Cloudinary upload
export async function POST(req: Request) {
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

    if (!nip || !name || !jabatan || !pesan || !file) {
      return NextResponse.json(
        { error: "All fields required (nip, name, jabatan, pesan, image)" },
        { status: 400 }
      );
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

    const teacher = await prisma.teacher.create({
      data: {
        nip,
        name,
        jabatan,
        pesan,
        imageUrl: uploadRes.secure_url,
        publicId: uploadRes.public_id,
      },
    });

    return NextResponse.json(teacher, { status: 201 });
  } catch (error) {
    // handle unique constraint (Prisma code P2002)
   if (error instanceof Prisma.PrismaClientKnownRequestError) {
     if (error.code === "P2002") {
       return NextResponse.json(
         { error: "NIP already exists" },
         { status: 409 }
       );
     }
   }

   console.error("Create teacher error:", error);
   return NextResponse.json(
     { error: "Failed to create teacher" },
     { status: 500 }
   );
  }
}
