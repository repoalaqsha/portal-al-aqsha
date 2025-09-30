import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const visiMisi = await prisma.visiMisi.findMany();
    return NextResponse.json(visiMisi);
  } catch  {
    return NextResponse.json(
      { error: "Failed to fetch visi & misi" },
      { status: 500 }
    );
  }
}
