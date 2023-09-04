import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest ) {
  try {
    const response = NextResponse.json({
      message: "Logged out Successfully",
      success: true,
    });
    //response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    console.log(request.nextUrl.host)
     // Clear the "token" cookie
     response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0),
      path: '/',
    });
    // Set cache-control header to prevent caching
    response.headers.set('Cache-Control', 'no-store, must-revalidate');
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
