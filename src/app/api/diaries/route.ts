import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/DBconfig/dbConfig";
import UserRole from "@/models/userRoleModel";
import Diary from '@/models/diaryModel';

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    const role = await UserRole.findOne({_id: user.role});

    // Get all diary entries of the user

    const diaryEntries = await Diary.find({ userId: userId });

    if(diaryEntries.length === 0){
        return NextResponse.json({
            success: false,
            message: "No diary entries found",
        }, {status: 404});
    }

    return NextResponse.json({
        success: true,
        message: "Diary entries found",
        data: diaryEntries,
    });


  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
    try {
        const userId = getDataFromToken(request);
        const reqBody = await request.json();
        const { date, content, title } = reqBody;

        const newDiaryEntry = new Diary({
            userId,
            date,
            content,
            title
        });

        const savedDiaryEntry = await newDiaryEntry.save();

        return NextResponse.json({
            success: true,
            message:"Diary entry created successfully",
            data: savedDiaryEntry,
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}