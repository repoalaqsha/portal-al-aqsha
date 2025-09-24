import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const sosmeds = await prisma.sosmed.findMany();
    return NextResponse.json(sosmeds);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch sosmeds" },
      { status: 500 }
    );
  }
}
