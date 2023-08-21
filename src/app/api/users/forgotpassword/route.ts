import { connect } from "@/DBconfig/dbConfig";
import { sendEmail } from "@/helpers/mailer";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    //const { token } = reqBody;
    const { email } = reqBody;
    console.log(email);

    const user = await User.findOne({
        email: email,
    });


    if (!user) {
        return NextResponse.json({ error: "User does not exists!" }, { status: 400 });
      }
      console.log("Forgot pass user: " + user);


     //send verification email
     await sendEmail({ email, emailType: "RESET", userId: user._id });



   

    // //
    // user.isVerified = true;
    // user.verifyToken = undefined;
    // user.verifyTokenExpiry = undefined;

    // await user.save();

    return NextResponse.json({
      message: "Sent password reset email successfully! Please Check your email!",
      success: true,
    });
  } catch (error: any) {
    console.log(error.message)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
