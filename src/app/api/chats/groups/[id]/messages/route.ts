import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/DBconfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import GroupChat from "@/models/groupChatModel";
import mongoose from "mongoose";
import Message from "@/models/messageModel";

connect();

export async function GET(request: NextRequest) {
  try {
    const userId = getDataFromToken(request);
    const pathParts = request.nextUrl.pathname.split('/');
    const chatId = pathParts[pathParts.length - 2]; // Get the chat ID from the URL

    // Find the group chat
    const groupChat = await GroupChat.findOne({ _id: chatId }).exec();

    if (!groupChat) {
      return NextResponse.json({
        success: false,
        message: "Group chat not found",
      }, { status: 404 });
    }

    // Check if the user is a participant in the group chat
    const isParticipant = groupChat.participants.some((participant: any) => participant.userId.toString() === userId.toString());

    if (!isParticipant) {
      return NextResponse.json({
        success: false,
        message: "You are not a participant in this group chat",
      }, { status: 403 });
    }
    const chats = await Message.find({chatId: groupChat._id});

    // Return the messages of the group chat
    return NextResponse.json({
      success: true,
      data: chats,
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function POST(request: NextRequest) {
  try {
    const userId = getDataFromToken(request);
    const pathParts = request.nextUrl.pathname.split('/');
    const chatId = pathParts[pathParts.length - 2]; // Get the chat ID from the URL
    const { content } = await request.json();

    // Find the group chat
    const groupChat = await GroupChat.findOne({ _id: chatId }).exec();

    if (!groupChat) {
      return NextResponse.json({
        success: false,
        message: "Group chat not found",
      }, { status: 404 });
    }

    // Check if the user is a participant in the group chat
    const isParticipant = groupChat.participants.some((participant: any) => participant.userId.toString() === userId.toString());

    if (!isParticipant) {
      return NextResponse.json({
        success: false,
        message: "You are not a participant in this group chat",
      }, { status: 403 });
    }

    // Create a new message object
    const newMessage = new Message({
      senderId: userId,
      chatId: chatId,
      content: content,
      timestamp: new Date(),
    });

    // Add the new message to the group chat
   // groupChat.messages.push(newMessage);

    // Save the message
    await newMessage.save();

    // Return the new message
    return NextResponse.json({
      success: true,
      message: "Message sent",
      data: newMessage,
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
