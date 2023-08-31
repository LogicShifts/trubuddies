import React, { useState } from "react";

const Checkbox = () => {

    
    const [Checks, setChecks] = useState(0)

    function updateCheck(){
        setChecks(a => (a+1)%3)
    }

  const normal = ( 
    <div className="w-[20px] h-[100%] rounded-full cursor-pointer flex justify-center align-middle m-2" onClick={updateCheck} >
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
          d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 9.563C9 9.252 9.252 9 9.563 9h4.874c.311 0 .563.252.563.563v4.874c0 .311-.252.563-.563.563H9.564A.562.562 0 019 14.437V9.564z"
        />
      </svg>
    </div>
  );
  const tickmark = (
    <div className="w-[20px] h-[100%] rounded-full cursor-pointer  flex justify-center align-middle m-2 text-green-700 font-extrabold"  onClick={updateCheck}>
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
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
  const cross = (
    <div className="w-[20px] h-[100%] rounded-full cursor-pointer  flex justify-center align-middle m-2 text-red-700 font-extrabold"  onClick={updateCheck}>
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
          d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
  );
 
  const checkArr = [normal, tickmark, cross ];

  return <>{checkArr[Checks]}</>;
};

export default Checkbox;
