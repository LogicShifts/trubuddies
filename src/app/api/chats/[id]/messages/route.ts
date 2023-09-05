import { NextRequest, NextResponse } from "next/server";
import Chat from '@/models/chatModel';
import { connect } from "@/DBconfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import mongoose from "mongoose";
import User from "@/models/userModel";
import Message from "@/models/messageModel";

connect();

export async function POST(request: NextRequest) {
    try {
        const userId = getDataFromToken(request);
        const pathParts = request.nextUrl.pathname.split('/');
        const chatId = pathParts[pathParts.length - 2]; // Get the chat ID from the URL
        const chat = await Chat.findById(chatId).exec();

        if(!chat){
            return NextResponse.json({
                success: false,
                message: "Chat not found",
            }, {status: 404});
        }

        // Check if the user is a participant in the chat
        const isParticipant = chat.participants.buddy.toString() === userId.toString() || chat.participants.truBuddy.toString() === userId.toString();
        
        if (!isParticipant) {
            return NextResponse.json({
                success: false,
                message: "User is not a participant in this chat",
            }, {status: 403});
        }

        // Create a new message
        const { content } = await request.json();
        // const message = {
        //     _id: new mongoose.Types.ObjectId(),
        //     senderId: userId,
        //     content,
        //     timestamp: new Date(),
        // };
        // chat.messages.push(message);
        // await chat.save();

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

        return NextResponse.json({
            success: true,
            message: "Message sent",
            data: newMessage,
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}

export async function GET(request: NextRequest) {
    try {
      const userId = getDataFromToken(request);
      const user = await User.findOne({ _id: userId }).select("-password");
      const pathParts = request.nextUrl.pathname.split('/');
      const chatId = pathParts[pathParts.length - 2]; // Get the chat ID from the URL
      const chat = await Chat.findById(chatId).select('participants').exec();
  
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

      const chats = await Message.find({chatId: chat._id});

  
      // Find the user with which the current user is chatting with
      const otherUserId =
        chat.participants.buddy.toString() === userId.toString()
          ? chat.participants.truBuddy
          : chat.participants.buddy;

      const otherUser = await User.findById(otherUserId)
        .select("displayName")
        .exec();

        const messages = await Message.find({chatId: chat._id});
  
      // Add the other user's userId and displayName to the returned chat data
      const chatWithOtherUser = {
        //...chat._doc,
        messages: chats,
        otherUser: {
          userId: otherUser._id,
          displayName: otherUser.displayName,
        },
        requestingUser: {
            userId: user._id,
            displayName: user.displayName
          },
        messages:messages,
      };


      
      //console.log(chatWithOtherUser);
      return NextResponse.json({
        success: true,
        message: "Chat found",
        data: chatWithOtherUser,
      });
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }
  