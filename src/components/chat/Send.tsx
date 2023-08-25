import React from "react";

const Send = ({ text }: { text: any }) => {
  return (
    <div className="w-full">
      <div className="float-right p-2 mr-4 bg-white rounded-t-lg rounded-l-lg">
        {text}
      </div>
    </div>
  );
};

export default Send;
