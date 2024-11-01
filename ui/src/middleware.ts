/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

type JWTpayload = {
  id: string;
  role: "user" | "admin";
};

/**
 * Middleware to handle route access based on user authentication and role.
 */
export async function middleware(request: NextRequest) {
  try {
    // const JWT_SECRET = process.env.ACCESS_TOKEN_SECRET as any;
    const JWT_SECRET = new TextEncoder().encode(
      process.env.ACCESS_TOKEN_SECRET
    );

    const { pathname } = request.nextUrl;
    const token = request.cookies.get(process.env.TOKEN_COOKIE_LABEL!);

    // Handle public access routes
    if (pathname === "/signup" || pathname === "/login") {
      if (!token) {
        return NextResponse.next();
      }
      try {
        const { payload } = await jwtVerify(String(token.value), JWT_SECRET);
        const user = payload as JWTpayload;
       

        if (user.role === "admin") {
          return NextResponse.redirect(new URL("/admin", request.url));
        } else if (user.role === "user") {
          return NextResponse.redirect(new URL("/", request.url));
        }
      } catch (error) {
        console.error("Token verification failed:", error);
        return NextResponse.next();
      }
    }

    // Handle protected admin route
    if (pathname.startsWith("/admin")) {
      if (!token) {
        return NextResponse.redirect(new URL("/login", request.url));
      }
      try {
        const { payload } = await jwtVerify(String(token.value), JWT_SECRET);
        const user = payload as JWTpayload;

        if (user.role !== "admin") {
          return NextResponse.redirect(new URL("/", request.url));
        }
      } catch (error) {
        console.error("Token verification failed:", error);
        return NextResponse.redirect(new URL("/login", request.url));
      }
    }

    return NextResponse.next();
  } catch (error) {
    console.log("🚀 ~ middleware ~ error:", error);
  }
}

// Only run the middleware for these routes
export const config = {
  matcher: ["/signup", "/login", "/admin/:path*"],
};

// import { NextRequest, NextResponse } from "next/server";
// import { jwtVerify } from "jose";

// // Constants
// const JWT_SECRET = new TextEncoder().encode(
//   process.env.ACCESS_TOKEN_SECRET || "secret-key"
// );

// const COOKIE_NAME = process.env.TOKEN_COOKIE_LABEL || "auth_token";

// // Types
// interface JWTPayload {
//   id: string;
//   role: "user" | "admin";
// }

// // Routes configuration
// const PUBLIC_ROUTES = ["/signup", "/login"];
// const ADMIN_ROUTES = ["/admin"];
// const DEFAULT_REDIRECT = "/login";
// const ADMIN_REDIRECT = "/admin";
// const USER_REDIRECT = "/";

// // Helper functions
// async function verifyToken(token: string): Promise<JWTPayload | null> {
//   try {
//     const { payload } = await jwtVerify(token, JWT_SECRET);
//     return payload as unknown as JWTPayload;
//   } catch {
//     return null;
//   }
// }

// function isPublicRoute(pathname: string): boolean {
//   return PUBLIC_ROUTES.includes(pathname);
// }

// function isAdminRoute(pathname: string): boolean {
//   return ADMIN_ROUTES.some((route) => pathname.startsWith(route));
// }

// function createRedirectResponse(request: NextRequest, destination: string) {
//   return NextResponse.redirect(new URL(destination, request.url));
// }

// export async function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;
//   const token = request.cookies.get(COOKIE_NAME);

//   if (!token?.value) {

//     if (isPublicRoute(pathname)) {
//       return NextResponse.next();
//     }

//     return createRedirectResponse(request, DEFAULT_REDIRECT);
//   }

//   const payload = await verifyToken(token.value);

//   if (!payload) {

//     const response = createRedirectResponse(request, DEFAULT_REDIRECT);
//     response.cookies.delete(COOKIE_NAME);
//     return response;
//   }

//   if (isPublicRoute(pathname)) {

//     return createRedirectResponse(
//       request,
//       payload.role === "admin" ? ADMIN_REDIRECT : USER_REDIRECT
//     );
//   }

//   if (isAdminRoute(pathname)) {
//     // Check admin access
//     if (payload.role !== "admin") {
//       return createRedirectResponse(request, USER_REDIRECT);
//     }
//     return NextResponse.next();
//   }

//   // Step 6: Allow access to other routes
//   return NextResponse.next();
// }

// // Configure middleware matching
// export const config = {
//   matcher: [
//     /*
//      * Match all request paths except for the ones starting with:
//      * - api (API routes)
//      * - _next/static (static files)
//      * - _next/image (image optimization files)
//      * - favicon.ico (favicon file)
//      * - public files (public folder)
//      */
//     "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
//   ],
// };
