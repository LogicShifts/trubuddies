//[id]/participants/route.ts

import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/DBconfig/dbConfig";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import GroupChat from "@/models/groupChatModel";

connect();

export async function POST(request: NextRequest) {
  try {
    const userId = getDataFromToken(request);
    const pathParts = request.nextUrl.pathname.split('/');
    const chatId = pathParts[pathParts.length - 2]; // Get the chat ID from the URL
    const { participantIds } = await request.json();

    // Find the group chat
    const groupChat = await GroupChat.findOne( {_id: chatId}).exec();
    if (!groupChat) {
      return NextResponse.json({
        success: false,
        message: "Group chat not found",
      }, { status: 404 });
    }

    // Check if the user making the request is an admin in the group chat
    const isAdmin = groupChat.participants.some((participant: { userId: any; isAdmin: any; }) => participant.userId.toString() === userId.toString() && participant.isAdmin);
    if (!isAdmin) {
      return NextResponse.json({
        success: false,
        message: "Only admins can add participants to the group chat",
      }, { status: 403 });
    }

    //participantIds
    // Check if the participant to be added is already a participant in the group chat

    // for(const participantId  in participantIds){
    //     const isParticipant = groupChat.participants.some((participant: { userId: { toString: () => any; }; toString: () => any; }) => participant.userId.toString() === participant.toString());
    //     if (isParticipant) {
    //         console.log("Participant is already a member of the group chat "+ participantId);
    //         participantIds.
    //     //   return NextResponse.json({
    //     //     success: false,
    //     //     message: "Participant is already a member of the group chat",
    //     //   }, { status: 400 });
    //     }
    
    // }
    const filteredParticipantIds = participantIds.filter((participantId : any) =>
  !groupChat.participants.some(
    (participant : any) => participant.userId.toString() === participantId.toString()
  )
);

    console.log(participantIds);
    console.log(filteredParticipantIds);
    

    // Add the participants to the group chat
    const newParticipants = filteredParticipantIds.map((participantId: any) => ({ userId: participantId, isAdmin: false }));
    
    groupChat.participants.push(...newParticipants);
    await groupChat.save();

    return NextResponse.json({
      success: true,
      message: "Participants added to the group chat",
      data: groupChat
    });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
