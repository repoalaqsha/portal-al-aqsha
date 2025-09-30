import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cookies } from "next/headers";
import { randomUUID } from "crypto";

function getIp(req: Request) {
  const forwarded = req.headers.get("x-forwarded-for");
  return forwarded ? forwarded.split(",")[0].trim() : "0.0.0.0";
}

export async function POST(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id: postId } = params;

    // ambil / buat visitorId cookie
    const cookieStore = await cookies();
    let visitorId = cookieStore.get("visitorId")?.value;
    if (!visitorId) {
      visitorId = randomUUID();
      cookieStore.set("visitorId", visitorId, {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24 * 30, // 30 hari
      });
    }

    const ipAddress = getIp(req);
    const userAgent = req.headers.get("user-agent") || "unknown";

    const visitor = await prisma.visitor.upsert({
      where: {
        postId_visitorId: { postId, visitorId },
      },
      update: { readAt: new Date() },
      create: {
        postId,
        visitorId,
        ipAddress,
        userAgent,
      },
    });

    return NextResponse.json({ success: true, visitor });
  } catch (error) {
    console.error("❌ Error mencatat visitor:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mencatat visitor" },
      { status: 500 }
    );
  }
}

export async function GET(req: Request) {
  try {
    const { pathname } = new URL(req.url);
    const postId = pathname.split("/").slice(-2, -1)[0]; // ambil [id] sebelum "visitor"

    const count = await prisma.visitor.count({
      where: { postId },
    });

    const visitors = await prisma.visitor.findMany({
      where: { postId },
      select: {
        id: true,
        ipAddress: true,
        userAgent: true,
        readAt: true,
      },
      orderBy: { readAt: "desc" },
    });

    return NextResponse.json({ success: true, count, visitors });
  } catch (error) {
    console.error("❌ Error mengambil data visitor:", error);
    return NextResponse.json(
      { success: false, error: "Gagal mengambil data visitor" },
      { status: 500 }
    );
  }
}
