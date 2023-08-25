import React, { useEffect, useState } from "react";

const Calender = ({ changedate , today}:{changedate:any,today:Date}) => {

    useEffect(() => {
     console.log(today)
    }, [today])
    

    function nextday(){
        changedate(
            (currentDate:Date)=>{
                const nextDayDate = new Date(currentDate);
                nextDayDate.setDate(currentDate.getDate() + 1);
                return nextDayDate;
            }
        );
    }

    
    function prevday(){
      changedate(
            (currentDate:Date)=>{
                const nextDayDate = new Date(currentDate);
                nextDayDate.setDate(currentDate.getDate() - 1);
                changedate(nextDayDate);
                return nextDayDate;
            }
        );
    }
  return (
    <div className="w-full flex flex-row justify-center" >
      <button className="text-gray-500 font-bold p-4 rounded-full hover:bg-gray-200" onClick={prevday} >
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
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <div className="text-green-500 font-bold p-4  hover:text-blue-500">{today.getDate()} </div>
      <div className="text-red-500 font-bold p-4  hover:text-blue-500">{today.getMonth()+1}</div>
      <div className="text-blue-500 font-bold p-4  hover:text-blue-500">{today.getFullYear() }</div>
      <button className="text-gray-500 font-bold p-4 rounded-full  hover:bg-gray-200" onClick={nextday} >

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
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default Calender;
