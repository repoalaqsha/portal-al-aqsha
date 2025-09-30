import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const sosmed = await prisma.sosmed.update({
      where: { id: params.id },
      data: body,
    });
    return NextResponse.json(sosmed);
  } catch  {
    return NextResponse.json(
      { error: "Failed to update sosmed" },
      { status: 500 }
    );
  }
}
