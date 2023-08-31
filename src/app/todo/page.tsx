"use client";

import React, { useState } from "react";
import Header from "@/components/navbar";
import FooterSecondary from "@/components/footer/footer2";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./custom-calender.css";
import ToDoTop from "@/components/todo/ToDoTop";

const ToDo = () => {
  const [date, setDate] = useState(new Date());
  return (
    <>
      <Header />

      <div className="min-h-[85vh]">
        <Calendar value={date} onChange={(value) => setDate} />
        <ToDoTop date={date} />
      </div>

      <FooterSecondary />
    </>
  );
};

export default ToDo;
