// src/app/api/groupchats/route.ts

import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/DBconfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import GroupChat from "@/models/groupChatModel";
import UserRole from "@/models/userRoleModel";
import User from "@/models/userModel";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = getDataFromToken(request);

    // Find all group chats where the user is a participant
    const groupChats = await GroupChat.find({
      "participants.userId": userId
    })
    .select('-messages')
    .exec();

    return NextResponse.json({
      success: true,
      data: groupChats
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
    try {
      const userId = getDataFromToken(request);

      const user = await User.findOne({_id:userId});
      // Check if the user has a support role
      const userRole = await UserRole.findOne({ _id : user.role }).exec();
      console.log(userRole);
      if (!userRole || userRole.roleName !== "support") {
        return NextResponse.json({
          success: false,
          message: "Only users with a support role can create group chats",
        }, { status: 403 });
      }
  
      // Create a new group chat
      const { groupName, groupDescription } = await request.json();
      const groupChat = new GroupChat({
        groupName,
        groupDescription,
        participants: [{ userId, isAdmin: true }]
      });
      await groupChat.save();
  
      return NextResponse.json({
        success: true,
        message: "Group chat created",
        data: groupChat
      });
  
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }