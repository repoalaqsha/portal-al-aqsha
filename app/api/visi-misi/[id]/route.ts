import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: Request) {
  try {
    // ambil id dari path
    const url = new URL(req.url);
    const segments = url.pathname.split("/");
    const id = segments[segments.length - 1];

    const body = await req.json();

    const visiMisi = await prisma.visiMisi.update({
      where: { id },
      data: body,
    });

    return NextResponse.json(visiMisi);
  } catch  {
    return NextResponse.json(
      { error: "Failed to update visi & misi" },
      { status: 500 }
    );
  }
}
