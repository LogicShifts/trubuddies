import { connect } from "@/DBconfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";
import UserRole from "@/models/userRoleModel";


connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { displayName, email, password } = reqBody;
    console.log(reqBody);

    //check user already exists
    const user = await User.findOne({ email });
    if (user) {
      console.log("User already exists");
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);


     // Find the highest existing user ID
     const highestUserId = await User.findOne()
     .sort("-userId")
     .select("userId");

   // Calculate the next available unique user ID
   const nextUserId = highestUserId ? highestUserId.userId + 1 : 1000;

   const buddyRole = await UserRole.findOne({roleName: "buddy"});
    //create user
    const newUser = new User({ userId: nextUserId, email, displayName, password: hashedPassword , role: buddyRole._id});

    //saving user in the database
    const savedUser = await newUser.save();
    console.log(savedUser);

    //send verification email
    await sendEmail({ email, emailType: "VERIFY", id: savedUser._id, host: request.nextUrl.host });

    //return success response
    return NextResponse.json({
      message: "User created successfully",
      success: true,
      savedUser,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
