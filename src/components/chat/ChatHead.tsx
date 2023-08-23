import React from "react";

const ChatHead = ({ chatName, setToogle }) => {
  function changedToogle() {
    console.log("toogled false");
    setToogle(false);
  }

  return (
    <div className="w-full h-12 bg-blue-600 flex flex-row justify-between  text-white align-middle pt-2">
      <button className="mx-8" onClick={changedToogle}  >⬅</button>
      {chatName}
      <div className="w-8 h-8 rounded-full overflow-hidden mx-8">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Profile Image"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default ChatHead;
