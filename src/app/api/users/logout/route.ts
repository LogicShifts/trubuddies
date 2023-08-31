import { NextRequest, NextResponse } from "next/server";

export async function GET(request:NextRequest ) {
  try {
    const response = NextResponse.json({
      message: "Logged out Successfully",
      success: true,
    });
    //response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });
    console.log(request.nextUrl.host)
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0), path: '/', domain: request.nextUrl.hostname === 'localhost' ? 'localhost': request.nextUrl.host });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
