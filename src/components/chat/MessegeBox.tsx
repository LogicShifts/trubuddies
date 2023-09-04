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
    <div className="h-[10%] p-1 flex flex-row justify-center">
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
            d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
          />
        </svg>
      </button>
    </div>
  );
};

export default MessegeBox;
