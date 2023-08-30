import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/DBconfig/dbConfig";
import UserRole from "@/models/userRoleModel";
import Chat from '@/models/chatModel';

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    const role = await UserRole.findOne({_id: user.role});

    //getting all the chats of the user

    const chats = await Chat.find({
        $or: [
            { "participants.buddy": userId },
            { "participants.truBuddy": userId }
        ]
    }).exec();

    if(chats.length === 0){
        return NextResponse.json({
            success: true,
            message: "0 Chats found",
            data: chats,
        });
    }

    return NextResponse.json({
        success: true,
        message: "Chats found",
        data: chats,
    });


  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}

export async function POST(request: NextRequest) {
    try {
        const userId = getDataFromToken(request);
        const reqBody = await request.json();
        const { truBuddyId } = reqBody;

        const existingChat = await Chat.findOne({
            "participants.buddy": userId,
            "participants.truBuddy": truBuddyId
        }).exec();

        if(existingChat !== null && existingChat !== undefined ){
            return NextResponse.json({
                success: false,
                message:"Chat already exists",
                data: existingChat,
            })
        }

        

        const newChat = new Chat({
            participants: {
                buddy: userId,
                truBuddy: truBuddyId
            },
            messages: []
        });

        const savedChat = await newChat.save();

        return NextResponse.json({
            success: true,
            message:"Chat created successfully",
            data: savedChat,
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}