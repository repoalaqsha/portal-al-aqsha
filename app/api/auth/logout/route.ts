import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  const allCookies = (await cookies()).getAll();

  const response = NextResponse.json(
    { message: "All cookies cleared" },
    { status: 200 }
  );

  allCookies.forEach((cookie:any) => {
    response.cookies.set({
      name: cookie.name,
      value: "",
      expires: new Date(0), 
      path: "/", 
    });
  });

  return response;
}
