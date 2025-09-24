// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  const protectedRoutes = ["/admin-area"];

  // Kalau masuk ke protected routes tapi tidak ada token → redirect ke login
  if (protectedRoutes.some((route) => pathname.startsWith(route))) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", req.url));
    }
  }

  // Kalau user sudah punya token, cegah akses ke /login → lempar ke /admin-area
  if (pathname.startsWith("/login") && token) {
    return NextResponse.redirect(new URL("/admin-area", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin-area/:path*", "/login"],
};
