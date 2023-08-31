import { NextRequest, NextResponse } from "next/server";
import Chat from "@/models/chatModel";
import { connect } from "@/DBconfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import User from "@/models/userModel";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    const chatId = request.nextUrl.pathname.split("/").pop(); // Get the chat ID from the URL
    const chat = await Chat.findById(chatId) .exec();

    if (!chat) {
      return NextResponse.json(
        {
          success: false,
          message: "Chat not found",
        },
        { status: 404 }
      );
    }
    // console.log(chat);
    // console.log(userId);
    // console.log(chat.participants.buddy);
    // console.log(chat.participants.truBuddy);
    // Check if the user is a participant in the chat
    const isParticipant =
      chat.participants.buddy.toString() === userId.toString() ||
      chat.participants.truBuddy.toString() === userId.toString();

    if (!isParticipant) {
      return NextResponse.json(
        {
          success: false,
          message: "User is not a participant in this chat",
        },
        { status: 403 }
      );
    }

    // Find the user with which the current user is chatting with
    const otherUserId =
      chat.participants.buddy.toString() === userId.toString()
        ? chat.participants.truBuddy
        : chat.participants.buddy;
    const otherUser = await User.findById(otherUserId)
      .select("displayName")
      .exec();

    // Add the other user's userId and displayName to the returned chat data
    const chatWithOtherUser = {
      ...chat._doc,
      otherUser: {
        userId: otherUser._id,
        displayName: otherUser.displayName,
      },
      requestingUser: {
        userId: user._id,
        displayName: user.displayName
      }
    };
    console.log(chatWithOtherUser);
    return NextResponse.json({
      success: true,
      message: "Chat found",
      data: chatWithOtherUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
