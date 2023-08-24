"use client"

import Image from "next/image";
import Header from "@/components/navbar";
import ChatNameBox from "@/components/chat/ChatNameBox";
import ChatSection from "@/components/chat/ChatSection";
import { useEffect, useState } from "react";





export default function ChatPage() {

  const [isMobile,setIsMobile] = useState(true);
  const [toogle,setToogle]=useState(false);


  const [name,setName] = useState("")

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

  if( isMobile ){
    return (
      <main>
        <Header />   
        <div className="absolute h-[86%] w-screen mt-20 flex flex-row">
            {
              toogle ?
              <ChatSection chatName={name}   setToogle={setToogle}/>
              :
              <ChatNameBox setName={setName} setToogle={setToogle}  />
            }
        </div>
      </main>
  );
  }else{
    return (
      <main>
      <Header /> 
      <div className="absolute h-[86%] w-screen mt-20 flex flex-row">
        <ChatNameBox setName={setName} setToogle={setToogle}  />
        <ChatSection chatName={name}   setToogle={setToogle}/>
      </div>
      </main>
    );
  };
}
