import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Ambil profil sekolah (GET)
export async function GET() {
  try {
    const profile = await prisma.schoolProfile.findFirst();
    return NextResponse.json({ success: true, profile });
  } catch (error) {
    console.error("❌ Error GET profile:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mengambil data" },
      { status: 500 }
    );
  }
}

// Update profil sekolah (PUT)
export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const existing = await prisma.schoolProfile.findFirst();

    let profile;
    if (existing) {
      profile = await prisma.schoolProfile.update({
        where: { id: existing.id },
        data: body,
      });
    } else {
      profile = await prisma.schoolProfile.create({
        data: body,
      });
    }

    return NextResponse.json({ success: true, profile });
  } catch (error) {
    console.error("❌ Error PUT profile:", error);
    return NextResponse.json(
      { success: false, error: "Gagal update data" },
      { status: 500 }
    );
  }
}
