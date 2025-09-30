import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const visiMisi = await prisma.visiMisi.update({
      where: { id: params.id },
      data: body,
    });
    return NextResponse.json(visiMisi);
  } catch {
    return NextResponse.json(
      { error: "Failed to update visi & misi" },
      { status: 500 }
    );
  }
}
