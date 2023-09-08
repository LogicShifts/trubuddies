import React, { useState } from 'react'

const BuddyProfile = (
    {isGreen,name,id,setAddedNames,setNotAddedNames}:{isGreen:boolean,name:any,id:any,setAddedNames:any,setNotAddedNames:any}
) => {

    const [isIn, setisIn] = useState(isGreen) 

    function addUser(id:any){
        console.log(id)
        setisIn(false)
        setNotAddedNames((prevElements:any) => prevElements.filter((element:any) => element._id !== id))
        console.log({displayName:name,_id:id})
        setAddedNames((prevElements:any) => {
            prevElements.push({displayName:name,_id:id})
            return prevElements
        })
        
    }
    function removeUser(id:any){
        console.log(id)
        setisIn(true)
        setAddedNames((prevElements:any) => prevElements.filter((element:any) => element._id !== id))
        console.log({displayName:name,_id:id})
        setNotAddedNames((prevElements:any) => {
            prevElements.push({displayName:name,_id:id})
            return prevElements
        })
        
    }

  return (
    <div className='w-[80%] m-auto p-2 rounded-full flex flex-row my-2 justify-around border shadow-lg'>
        <div className='pt-2'> {name} </div>
        <div>
            {isIn?
             <button className='py-2 px-4 bg-green-600 hover:bg-green-800 text-white rounded-full' onClick={()=>addUser(id)}  >Add</button>
             :
             <button className='py-2 px-4 bg-red-600 hover:bg-red-800 text-white rounded-full' onClick={()=>removeUser(id)}  >Remove</button>
            }
           
        </div>
    </div>
  )
}

export default BuddyProfile