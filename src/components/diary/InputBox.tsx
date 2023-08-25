import React from 'react'

const InputBox = ({setContent,date}) => {

    function closeEditor(){
        setContent("cards");
    }

    function saveContent(){
        //api request
        setContent("cards")
    }
  return (
    <div className='w-[94%] m-[3%] bg-blue-300 flex flex-col p-6 rounded-xl'>
        <div className="flex flex-row justify-between">
            <div className="text-center font-extrabold flex flex-row align-center justify-center">
                <div className='text-[40px] text-gray-600 mx-1'>{date.getDate()} </div>
                <div className='text-[25px] text-gray-400 mx-1 pt-4'>{date.getMonth()+1}</div>
                <div className='text-[30px] text-gray-700 mx-1 pt-3'>{date.getFullYear()}</div>
            </div>
            <div className="w-[40px] h-[40px] bg-blue-950  rounded-full p-1">🙂</div>
        </div>
        <input type="text" placeholder='title'  className='rounded-xl p-2 w-full my-4'/>
        <textarea   className='rounded-xl p-2 w-full my-4 h-[250px]'  placeholder="what's new ? " ></textarea>
        <div className="flex flex-row justify-around my-2">
                <button onClick={closeEditor} className='w-[90px] h-[40px] text-center rounded-xl font-bold text-white bg-red-600'>Cancel</button>
                <button onClick={saveContent} className='w-[90px] h-[40px] text-center rounded-xl font-bold text-white bg-blue-600'>Save</button>
        </div>
    </div>
  )
}

export default InputBox