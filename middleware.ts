import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const auth = request.cookies.get("auth")?.value;
  const role = request.cookies.get("role")?.value ?? "user";
  const path = request.nextUrl.pathname;

  if (path === "/login") {
    return NextResponse.next();
  }

  if (!auth) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (path.startsWith("/home") && role === "admin") {
    return NextResponse.redirect(new URL("/food", request.url));
  }

  if (path.startsWith("/food") && role !== "admin") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/food/:path*", "/home/:path*"],
};
