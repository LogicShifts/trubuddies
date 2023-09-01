// src/app/api/groupchats/route.ts

import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/DBconfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import GroupChat from "@/models/groupChatModel";

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

