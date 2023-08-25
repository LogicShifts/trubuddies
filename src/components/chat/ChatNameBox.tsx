import React from "react";
import ChatName from "./ChatName";
import { trusted } from "mongoose";

const ChatNameBox = ({
  setName,
  setToogle,
}: {
  setName: any;
  setToogle: any;
}) => {
  return (
    <div className="h-[100%] w-full md:w-1/4 flex flex-col overflow-y-scroll ">
      <ChatName person={"mainak"} setName={setName} setToogle={setToogle} />
      <ChatName person={"Chandan"} setName={setName} setToogle={setToogle} />
      <ChatName person={"Ayush"} setName={setName} setToogle={setToogle} />
      <ChatName person={"Sombee"} setName={setName} setToogle={setToogle} />
      <ChatName person={"Avi"} setName={setName} setToogle={setToogle} />
      <ChatName person={"Subrata"} setName={setName} setToogle={setToogle} />
      <ChatName person={"Rohit"} setName={setName} setToogle={setToogle} />
      <ChatName person={"Sneha"} setName={setName} setToogle={setToogle} />
      <ChatName person={"Shinjini"} setName={setName} setToogle={setToogle} />
      <ChatName person={"Disha"} setName={setName} setToogle={setToogle} />
      <ChatName person={"Priyanka"} setName={setName} setToogle={setToogle} />
      <ChatName person={"Rafik"} setName={setName} setToogle={setToogle} />
      <ChatName person={"Somrita"} setName={setName} setToogle={setToogle} />
      <ChatName person={"Dadu"} setName={setName} setToogle={setToogle} />
      <ChatName person={"CTO"} setName={setName} setToogle={setToogle} />
      <ChatName person={"Takla"} setName={setName} setToogle={setToogle} />
    </div>
  );
};

export default ChatNameBox;
