import React from "react";
import DiaryCard from "./DiaryCard";

const CardBox = ({
  setContent,
  setCardId,
}: {
  setContent: any;
  setCardId: any;
}) => {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo magni debitis rerum facere? Hic necessitatibus sit illo possimus dolorem nobis quasi quos, facilis consectetur quod natus voluptate! Aut, molestiae incidunt.";
  return (
    <div className="w-full h-full flex flex-wrap">
      <DiaryCard
        setContent={setContent}
        setCardID={setCardId}
        heading={"heading"}
        text={text}
      />
      <DiaryCard
        setContent={setContent}
        setCardID={setCardId}
        heading={"heading"}
        text={text}
      />
      <DiaryCard
        setContent={setContent}
        setCardID={setCardId}
        heading={"heading"}
        text={text}
      />
      <DiaryCard
        setContent={setContent}
        setCardID={setCardId}
        heading={"heading"}
        text={text}
      />
      <DiaryCard
        setContent={setContent}
        setCardID={setCardId}
        heading={"heading"}
        text={text}
      />
      <DiaryCard
        setContent={setContent}
        setCardID={setCardId}
        heading={"heading"}
        text={text}
      />
      <DiaryCard
        setContent={setContent}
        setCardID={setCardId}
        heading={"heading"}
        text={text}
      />
    </div>
  );
};

export default CardBox;
