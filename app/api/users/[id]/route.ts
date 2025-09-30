import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();

    const dataToUpdate = { ...body };

    if (body.password) {
      const hashedPassword = await bcrypt.hash(body.password, 10);
      dataToUpdate.password = hashedPassword;
    }

    const user = await prisma.user.update({
      where: { id: params.id },
      data: dataToUpdate,
    });


    return NextResponse.json(user);
  } catch {
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}
