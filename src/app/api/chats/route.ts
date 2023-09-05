import { getDataFromToken } from "@/helpers/getDataFromToken";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import { connect } from "@/DBconfig/dbConfig";
import UserRole from "@/models/userRoleModel";
import Chat from "@/models/chatModel";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = getDataFromToken(request);
    const user = await User.findOne({ _id: userId }).select("-password");
    const role = await UserRole.findOne({ _id: user.role });

    //getting all the chats of the user

    const chats = await Chat.find({
      $or: [
        { "participants.buddy": userId },
        { "participants.truBuddy": userId },
      ],
    })
      .select("-messages")
      .exec();

    // Create a new array to store the modified chat data
    const modifiedChats = [];

    // Loop through each chat
    for (let chat of chats) {
      // Find the user with which the current user is chatting with
      const otherUserId =
        chat.participants.buddy.toString() === userId.toString()
          ? chat.participants.truBuddy
          : chat.participants.buddy;
      const otherUser = await User.findById(otherUserId)
        .select("displayName")
        .exec();

      // Add the other user's userId and displayName to the chat data
      const chatWithOtherUser = {
        ...chat._doc,
        otherUser: {
          userId: otherUser._id,
          displayName: otherUser.displayName,
        },
        requestingUser: {
          userId: user._id,
          displayName: user.displayName,
        },
      };

      // Add the modified chat data to the new array
      modifiedChats.push(chatWithOtherUser);
    }

    if (chats.length === 0) {
      return NextResponse.json({
        success: true,
        message: "0 Chats found",
        data: modifiedChats,
      });
    }

    return NextResponse.json({
      success: true,
      message: "Chats found",
      data: modifiedChats,
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

    //user must be a buddy
    const user = await User.findById(userId);
    const role = await UserRole.findById(user.role);

    if (role.roleName.toLowerCase() !== "buddy".toLowerCase()) {
      return NextResponse.json(
        {
          success: false,
          message: "User is not an buddy",
        },
        { status: 403 }
      );
    }
    const truBuddy = await User.findById(truBuddyId);
    const truBuddyRole = await UserRole.findById(truBuddy.role);

    if (truBuddyRole.roleName.toLowerCase() !== "truBuddy".toLowerCase()) {
      return NextResponse.json(
        {
          success: false,
          message: "Chat creation forbidden!",
        },
        { status: 403 }
      );
    }


    const existingChat = await Chat.findOne({
      "participants.buddy": userId,
      "participants.truBuddy": truBuddyId,
    }).exec();

    if (existingChat !== null && existingChat !== undefined) {
      return NextResponse.json({
        success: true,
        message: "Chat already exists",
        data: existingChat,
      });
    }

    const newChat = new Chat({
      participants: {
        buddy: userId,
        truBuddy: truBuddyId,
      },
    });

    const savedChat = await newChat.save();

    return NextResponse.json({
      success: true,
      message: "Chat created successfully",
      data: savedChat,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
