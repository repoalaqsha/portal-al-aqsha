import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import bcrypt from "bcrypt";
import type { Prisma } from "@prisma/client";

export async function PATCH(req: Request) {
  try {
    const url = new URL(req.url);
    const segments = url.pathname.split("/");
    const id = segments[segments.length - 1]; 

    const body = await req.json();

    const dataToUpdate: Prisma.UserUpdateInput = { ...body };

    if (body.password) {
      const hashedPassword = await bcrypt.hash(body.password, 10);
      dataToUpdate.password = hashedPassword;
    }

    const user = await prisma.user.update({
      where: { id },
      data: dataToUpdate,
    });

    return NextResponse.json(user);
  } catch (error: unknown) {
    console.error("Update user error:", error);
    return NextResponse.json(
      { error: "Failed to update user" },
      { status: 500 }
    );
  }
}
