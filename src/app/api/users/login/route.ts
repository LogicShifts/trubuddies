import { connect } from "@/DBconfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { username, password } = reqBody;
    console.log(reqBody);

    //check if user exists
    const user = await User.findOne({ username });
    if (!user) {
      NextResponse.json({ error: "User does not exist" }, { status: 400 });
    }

    // check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);

    //in case of invalid pass
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    //create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    //create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "1h",
    });

    //creating response
    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    console.log(token);
    
    //setting cookies
    response.cookies.set("token", token, {
      httpOnly: true,
    });

    //sending response
    return response;

    //end try
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
