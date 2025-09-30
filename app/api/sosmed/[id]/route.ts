import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const sosmed = await prisma.sosmed.update({
      where: { id },
      data: body,
    });
    return NextResponse.json(sosmed);
  } catch {
    return NextResponse.json(
      { error: "Failed to update sosmed" },
      { status: 500 }
    );
  }
}
