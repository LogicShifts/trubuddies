import React, { useState } from 'react'
import ToDoTiles from './ToDoTiles';



const ToDoTop = ({date}:{date:any}) => {

    const [addState, setaddState] = useState(false)
    const [search, setsearch] = useState("");
    const [timeValue, setTimeValue] = useState('');
    const [enterTodo, setenterTodo] = useState('');
    const [todos,settodos] = useState<any[]>([]);

    function searchTodo(e: { target: { value: React.SetStateAction<string>; }; }){
        setsearch(e.target.value)
    }

    function addTodo(){
        settodos(todos=>[...todos,{text:enterTodo,time:timeValue}])
        setTimeValue("");
        setenterTodo("");
        setaddState(false);
    }

  return (
    <>
    <div className='mt-4  w-[90%] lg:w-[60%] h-auto m-auto bg-blue-300 border rounded-lg border-blue-950'>
        <div className='text-center bg-blue-600 text-white rounded-t-lg'>{date.getDate()}:{date.getMonth()+1}:{date.getFullYear()}</div>
        <div className='w-full py-2'>
            <div className=" flex flex-row justify-around ">
                <input type="text" className='w-[65%] bg-blue-300 border-b border-b-slate-950 focus:outline-none  ' value={search} onChange={searchTodo}  placeholder='Search Task 🔎' />
                <button className='hover:bg-blue-400 rounded-full px-4' onClick={()=>setaddState(!addState)}  >+</button>
            </div>
            {addState?
                <div className='w-full flex flex-row justify-around my-4'>
                    <div  className='w-[70%]'>
                        <input type="text" 
                        className='rounded-lg focus:outline-none mx-2 px-2  w-[50%]' 
                        value={enterTodo}
                        onChange={(e)=>setenterTodo(e.target.value)}
                        />
                        <input
                            type="time"
                            value={timeValue}
                            className='rounded-lg bg-blue-400 px'
                            onChange={(e)=>setTimeValue(e.target.value)}
                        />
                    </div>
                    <button className='bg-blue-500 hover:bg-blue-600 px-2 rounded-lg '  onClick={addTodo} >ADD</button>
                </div>
            :<div></div> }
            <div>
            {todos.map((todo, index) =>(
                <ToDoTiles text={todo.text} time={todo.time} key={index} />
            ))}
            </div>
        </div>
    </div>
    </>
  )
}

export default ToDoTop