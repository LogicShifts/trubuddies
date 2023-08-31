import React, { useState } from "react";
import Checkbox from "./Checkbox";

const ToDoTiles = ({ text, time }: { text: string; time: any }) => {
  const [showtime, setshowtime] = useState(false);

  return (
    <>
    {showtime?
      <div className="bg-blue-500 my-2 flex flex-col justify-between">
        <div className="flex flex-row justify-between">
        <Checkbox></Checkbox>
        <div className="text-white" >{text}</div>
        <button  className="text-white" onClick={()=>setshowtime(false)}  >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5" />
          </svg>
        </button>
        </div>
        <div className="text-black text-center">
          {time}
        </div>
       
      </div>
      :
      <div className="bg-blue-400 my-2 flex flex-row justify-between">
            <Checkbox></Checkbox>
            <div>{text}</div>
            <button  className="text-blue-950" onClick={()=>setshowtime(true)} >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </button>
      </div>
    }
      
    </>
  );
};

export default ToDoTiles;
