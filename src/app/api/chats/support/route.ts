
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/userModel";
import Chat from "@/models/chatModel";
import { connect } from "@/DBconfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import SupportChat from "@/models/supportChatModel";

connect();


 export async function GET(request: NextRequest) {
   try {
     // Extract the user ID from the request token
     const userId = getDataFromToken(request);
 
     // Get the support team ID from the request body
     //const { supportTeamId } = await request.json();
 
     // Find the support team user
     //const supportTeam = await User.findById(supportTeamId);


     const supportChat = await SupportChat.findOne({ 'participants.user.userId': userId });

 
     if (supportChat !== null && supportChat !== undefined) {
      return NextResponse.json({
        success: true,
        message: "Chat already exists",
        data: supportChat,
      });
    }



    const newSupportChat = new SupportChat({
      participants: {
        user: {
          userId: userId, // Replace with the actual user ID
        },
      },
    });
    
 
    const createdSupportChat = await newSupportChat.save();

 
     return NextResponse.json({
       success: true,
       message: "Chat started successfully",
       data: createdSupportChat,
     });
   } catch (error: any) {
     return NextResponse.json({ error: error.message }, { status: 500 });
   }
 }
 