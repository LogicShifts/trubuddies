import mongoose from 'mongoose';
import Chat from '@/models/chatModel';
import { connect } from "@/DBconfig/dbConfig";
import { NextRequest, NextResponse } from 'next/server';



connect();




export async function POST(request: NextRequest){
     
    try {
        const reqBody = await request.json();

        const {buddyId, truBuddyId} = reqBody;

        const newChat = new Chat({
            participants: {
              buddy: buddyId,
              truBuddy: truBuddyId
            },
            messages: []
          });
          try {
            const savedChat = await newChat.save();
            console.log('Chat created successfully:', savedChat);
            NextResponse.json({
                success: true,
                message:"Chat created successfully",
                data: savedChat,
            })
          } catch (error) {
            console.error('Error creating chat:', error);
          }

        
    } catch (error:any) {
        NextResponse.json({error:error.message},{status:500});
    }

}



