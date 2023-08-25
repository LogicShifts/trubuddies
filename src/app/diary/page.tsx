"use client";
import Calender from "@/components/diary/Calender";
import CardBox from "@/components/diary/CardBox";
import InputBox from "@/components/diary/InputBox";
import ReadCard from "@/components/diary/ReadCard";
import Header from "@/components/navbar";
import FooterSecondary from "@/components/footer/footer2";
import { useState } from "react";

export default function Diary() {
  const [date, setDate] = useState(new Date());
  const [content, setContent] = useState("cards"); // cards, inputBox, readCard
  const [cardId, setCardId] = useState(0); 

  function openEditor(){
    setContent("inputBox");
  }


  function formatDate(date: any) {
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const year = date.getFullYear();

    return `${day}-${month}-${year}`;
  }

  if (content === "cards") {
    return (
      <>
        <Header />
        <Calender changedate={setDate} today={date} />
        <hr />
        <div className="flex justify-center w-full">
          <button className="bg-blue-700 px-6 py-4 font-extrabold rounded-full m-4 text-white  hover:bg-blue-950 " onClick={openEditor} >+ </button>
        </div>
        <CardBox   setContent={setContent}  setCardId={setCardId} />
        <FooterSecondary/>
      </>
    );
  }else if(content === "readCard"){
    return (
      <>
      <Header />
      <ReadCard setContent={setContent} />
      <FooterSecondary/>
    </>
    )
  }else if(content === "inputBox"){
    return (
      <>
        <Header />
        <InputBox setContent={setContent} date={date}
         />
        <FooterSecondary/>
      </>
    )
  }
}
