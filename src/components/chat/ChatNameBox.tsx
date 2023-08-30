import React, { useEffect, useState } from "react";
import ChatName from "./ChatName";
import { trusted } from "mongoose";
import axios from "axios";




const ChatNameBox = ({
  setName,
  setToogle,
  userChats
}: {
  setName: any;
  setToogle: any;
  userChats:any []
}) => {
  return (
    <div className="h-[100%] w-full md:w-1/4 flex flex-col overflow-y-scroll ">

{
  userChats.map((chat) => (
    <ChatName  key={chat._id} person={chat.participants.truBuddy} setName={setName} setToogle={setToogle} />
  ))
}

      {/* <ChatName person={"mainak"} setName={setName} setToogle={setToogle} /> */}
      
    </div>
  );
};

export default ChatNameBox;
