"use client";

import Image from "next/image";
import Header from "@/components/navbar";
import ChatNameBox from "@/components/chat/ChatNameBox";
import ChatSection from "@/components/chat/ChatSection";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ChatPage() {
  const [isMobile, setIsMobile] = useState(true);
  const [toogle, setToogle] = useState(false);

  const [name, setName] = useState("");

  const [userChats, setUserChats] = useState([] as Array<any>);

  useEffect(() => {
    const fetchUserChats = async () => {
      const chats = await fetchChats();
      setUserChats(chats);
    };

    fetchUserChats();
  }, []);

  const fetchChats = async () => {
    try {
      const response = await axios.get("/api/chats");
      console.log(response.data);
      return response.data.data;
    } catch (error) {
      console.error(error);
    }
  };

  // const handleResize = () => {
  //   setIsMobile(window.innerWidth<768);
  //   console.log(isMobile)
  // };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Set initial value

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // useEffect(() => {
  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, [isMobile]);

  if (isMobile) {
    return (
      <main>
        <Header />
        <div className="absolute h-[86%] w-screen mt-0 flex flex-row">
          {toogle ? (
            <ChatSection chatName={name} setToogle={setToogle} />
          ) : (
            <ChatNameBox
              userChats={userChats}
              setName={setName}
              setToogle={setToogle}
            />
          )}
        </div>
      </main>
    );
  } else {
    return (
      <main>
        <Header />
        <div className="absolute h-[87%] w-screen mt-0 mr-2 flex flex-row">
          <ChatNameBox
            userChats={userChats}
            setName={setName}
            setToogle={setToogle}
          />
          <ChatSection chatName={name} setToogle={setToogle} />
        </div>
      </main>
    );
  }
}
