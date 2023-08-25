import React, { useState } from "react";

const DiaryCard = ({setContent, setCardID, heading, text}) => {

    function openCard(){
        setContent("readCard")
    }

  return (
    <div className="w-[94%] m-[3%] lg:w-[46%] lg:m-[2%] xl:w-[21%] xl:m-[2%] rounded-lg bg-blue-400 hover:bg-blue-300 flex flex-col  p-4 cursor-pointer drop-shadow-lg"
            onClick={openCard}>
      <div className="flex flex-row justify-between">
        <div className="text-center font-extrabold ">Heading</div>
        <div className="w-[40px] h-[40px] bg-blue-950  rounded-full p-1">🙂</div>
    </div>
      <div> {String(text).slice(0, 150)} ...</div>
    </div>
  );
};

export default DiaryCard;
