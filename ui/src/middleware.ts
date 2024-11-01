import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
const JWT_SECRET = new TextEncoder().encode(
  process.env.ACCESS_TOKEN_SECRET || "secret-key"
);
type JWTpayload = {
  id: string;
  role: "user" | "admin";
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get(process.env.TOKEN_COOKIE_LABEL!);
  const { payload: JWT_payload } = await jwtVerify(
    String(token?.value),
    JWT_SECRET
  );

  const payload = JWT_payload as JWTpayload;
  if (pathname === "/signup" || pathname === "/login") {
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
    return NextResponse.next();
  }

  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
    if (payload.role !== "admin") {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }
}

export const config = {
  matcher: ["/signup", "/login", "/admin/:path"],
};
