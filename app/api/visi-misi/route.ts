import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const data = await prisma.visiMisi.findMany();
  return NextResponse.json(data);
}

export async function PATCH(req: Request) {
  try {
    const url = new URL(req.url);
    const segments = url.pathname.split("/");
    const id = segments[segments.length - 1];

    const body = await req.json();

    const visiMisi = await prisma.visiMisi.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(visiMisi);
  } catch (error) {
    console.error("PATCH error:", error); // tambahkan log
    return NextResponse.json(
      { error: "Failed to update visi & misi" },
      { status: 500 }
    );
  }
}
