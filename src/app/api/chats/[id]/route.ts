import { NextRequest, NextResponse } from "next/server";
import Chat from '@/models/chatModel';
import { connect } from "@/DBconfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connect();

export async function GET(request: NextRequest) {
    try {
        const userId = getDataFromToken(request);
        const chatId = request.nextUrl.pathname.split('/').pop(); // Get the chat ID from the URL
        const chat = await Chat.findById(chatId).exec();

        if(!chat){
            return NextResponse.json({
                success: false,
                message: "Chat not found",
            }, {status: 404});
        }
        // console.log(chat);
        // console.log(userId);
        // console.log(chat.participants.buddy);
        // console.log(chat.participants.truBuddy);
        // Check if the user is a participant in the chat
        const isParticipant = chat.participants.buddy.toString() === userId.toString() || chat.participants.truBuddy.toString() === userId.toString();
        
        if (!isParticipant) {
            return NextResponse.json({
                success: false,
                message: "User is not a participant in this chat",
            }, {status: 403});
        }

        return NextResponse.json({
            success: true,
            message: "Chat found",
            data: chat,
        });

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}