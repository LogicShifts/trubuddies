import { NextRequest, NextResponse } from "next/server";

//logic
export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;

  const isNonUserPath = path === "/login" || path === "/register" || path === "/resetpassword" || path === "/forgotpassword";

  const isPublicPath=
  path === "/" || isNonUserPath || path === "/verifyemail" ;

  const token = request.cookies.get("token")?.value || "";

  if (isNonUserPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

//matching paths
export const config = {
  matcher: ["/", "/dashboard/:path*", "/login", "/register", "/verifyemail", "/resetpassword"],
};
