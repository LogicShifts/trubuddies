import React, { useEffect, useState } from "react";
import ChatName from "./ChatName";
import { trusted } from "mongoose";
import axios from "axios";
import SearchBox from "./SearchBox";




const ChatNameBox = ({
  setName,
  setToogle,
  userChats,
  setaddBuddy
}: {
  setName: any;
  setToogle: any;
  userChats:any [];
  setaddBuddy:any;
}) => {
  return (
    <div className="h-[100%] w-full md:w-1/4 flex flex-col overflow-y-scroll ">
    <button className= "w-[80%] m-auto rounded-full bg-green-600 text-white my-2" onClick={()=>setaddBuddy(true)}  >Add truBuddy</button>
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
