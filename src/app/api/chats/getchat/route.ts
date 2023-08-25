import mongoose from 'mongoose';
import Chat from '@/models/chatModel';
import { connect } from "@/DBconfig/dbConfig";
import { NextRequest, NextResponse } from 'next/server';



connect();




export async function POST(request: NextRequest){
     
    try {
        const reqBody = await request.json();

        const {buddyId, truBuddyId} = reqBody;
        // const participants= {
        //   buddy: buddyId,
        //   truBuddy: truBuddyId };
        //   console.log(participants)
      // const buddyId="64e4f5f27799164b8ed260b2";
      // const truBuddyId= "64e4f7340782fcdd94244dfc";
          const existingChat = await Chat.findOne({
            "participants.buddy": buddyId,
            "participants.truBuddy": truBuddyId
          }).exec();
       //console.log(existingChat);
        if(existingChat !== null && existingChat !== undefined ){
          return NextResponse.json({
            success: true,
            message:"Chat found",
            data: existingChat,
        })
        }
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
            return NextResponse.json({
                success: true,
                message:"Chat created successfully",
                data: savedChat,
            })
          } catch (error:any) {
            console.error('Error creating chat:', error);
            return NextResponse.json({error:error.message},{status:500});
          }

        
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500});
    }

}



