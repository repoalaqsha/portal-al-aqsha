import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export function requireAuth(req: Request) {
  const cookieHeader = req.headers.get("cookie");
  if (!cookieHeader) return null;

  const token = cookieHeader
    .split(";")
    .find((c) => c.trim().startsWith("token="))
    ?.split("=")[1];

  if (!token) return null;

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      id: string;
      username: string;
    };
    return decoded;
  } catch {
    return null;
  }
}
