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

        const {isActive} = await request.json();       
     // Set the isActive status of the chat to false
    chat.isActive = isActive;
    await chat.save();

    return NextResponse.json({
      success: true,
      message: 'Chat disabled',
      data: chat,
    });

    
    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}