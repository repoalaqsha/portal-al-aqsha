import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const contact = await prisma.contact.update({
      where: { id: params.id },
      data: body,
    });
    return NextResponse.json(contact);
  } catch {
    return NextResponse.json(
      { error: "Failed to update contact" },
      { status: 500 }
    );
  }
}
