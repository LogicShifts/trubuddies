import React from "react";

const Received = ({ text }: { text: any }) => {
  return (
    <div className="w-full">
      <div className="float-left p-2 ml-4 bg-blue-700 rounded-t-lg rounded-r-lg text-white">
        {text}
      </div>
    </div>
  );
};

export default Received;
