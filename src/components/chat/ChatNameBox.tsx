import React, { useEffect, useState } from "react";
import ChatName from "./ChatName";
import { trusted } from "mongoose";
import axios from "axios";
import SearchBox from "./SearchBox";



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
    <SearchBox/>
    {
      userChats.map((chat) => (
        <ChatName  key={chat._id} person={chat.otherUser.displayName} setName={setName} setToogle={setToogle} />
      ))
    }

      {/* <ChatName person={"mainak"} setName={setName} setToogle={setToogle} /> */}
      
    </div>
  );
};

export default ChatNameBox;
