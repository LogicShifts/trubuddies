// pages/api/user.js
import { connect } from "@/DBconfig/dbConfig";
import User from "@/models/userModel";
import UserRole from "@/models/userRoleModel";
import { NextRequest, NextResponse } from "next/server";
import BuddyProfile from "@/models/buddyProfileModel";
//import TruBuddyProfile from "@/models/truBuddyProfileModel";
import Mood from "@/models/moodModel";
import DailyMood from "@/models/diaryModel";
import ToDo from "@/models/todoModel";
import TruBuddyReview from "@/models/truBuddyReviewModel";

connect();

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    await User.find();
    await BuddyProfile.find();
    //await TruBuddyProfile.find();
    await UserRole.find();
    await UserRole.find();
    await Mood.find();
    await DailyMood.find();
    await ToDo.find();
    await TruBuddyReview.find();

    return NextResponse.json({
      message: "init success",
      success: true,
    });
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
