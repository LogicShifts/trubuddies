import React from "react";
import ChatHead from "./ChatHead";
import MainChat from "./MainChat";
import MessegeBox from "./MessegeBox";

const ChatSection = ({
  chatName,
  setToogle,
}: {
  chatName: any;
  setToogle: any;
}) => {
  return (
    <div className="h-full w-full md:w-3/4 p-1  bg-blue-200 ">
      <ChatHead chatName={chatName} setToogle={setToogle} />
      {chatName === "" ? (
        <div></div>
      ) : (
        <>
          <MainChat />
          <MessegeBox />
        </>
      )}
    </div>
  );
};

export default ChatSection;
