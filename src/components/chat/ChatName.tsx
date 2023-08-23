import React from "react";

const ChatName = ({person, setName, setToogle}) => {


  function changeName(){
    setName(person);
    console.log("changed to:",person,true);
    setToogle(true);
  }
  return (
    <div className="w-full h-12 p-2 flex flex-row cursor-pointer border-b-2 border-black-50 hover:bg-green-100  " onClick={changeName} >
      <div className="w-8 h-8 rounded-full overflow-hidden mx-4">
        <img
          src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
          alt="Profile Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-auto text-blue-600 text-center">
        {person}
      </div>
      
    </div>
  );
};

export default ChatName;
