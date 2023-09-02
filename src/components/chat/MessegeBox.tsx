import React, { useState } from "react";

const MessegeBox = () => {
  const [message, setMessage] = useState("");
  const handleSendMessage = () => {
    if (message.trim() !== "") {
      // Here you could implement logic to sends the message
      console.log("Sending message:", message);

      // Clear the input field after sending
      setMessage("");
    }
  };
  return (
    <div className="h-[10%]  p-1 flex flex-row justify-center">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-grow bg-gray-100 border w-[80%] rounded-full p-2 ring-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Type a message..."
      />
      <button
        onClick={handleSendMessage}
        className=" bg-blue-500 text-white rounded-full p-2 m-1 hover:bg-blue-600 focus:outline-none  focus:ring-2 focus:ring-blue-500"
      >
        ▶{" "}
      </button>
    </div>
  );
};

export default MessegeBox;
