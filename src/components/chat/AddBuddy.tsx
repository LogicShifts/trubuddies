import React, { useEffect, useState } from 'react'
import BuddyProfile from './BuddyProfile';
import axios, { all } from 'axios';
const AddBuddy = (
    {
        setaddBuddy
    }:
    {
        setaddBuddy:any;
    }
) => {


    const [addedNames, setAddedNames] = useState([] as Array<any>)
    const [notAddedNames, setNotAddedNames] = useState([] as Array<any>)

    const getAllNames=async ()=>{
        const data ={
            "query":""
        }
        const response = await axios.post('/api/chats/search',data)
        return response.data.data.users
      }  

      const getchatName =async () => {
        const response = await axios.get("/api/chats");
        return response.data.data;
       
      }
    useEffect(() => {
        const fetchUser = async ()=>{
            const allusers = await getAllNames();
            const allChats = await getchatName();
            console.log(allusers)
            console.log(allChats)
            var notAddedChats=[]
            var addedChats=[]
            if(allChats.length>0){
                for(let user of allusers){
                    if(!allChats.otherUser.displayName.includes(user.displayName)){
                        notAddedChats.push(user);
                    }else{
                        addedChats.push(user);
                    }
                }
            }else{
                notAddedChats=[...allusers]
                addedChats=[]
            }
            console.log(notAddedChats)
            setNotAddedNames(notAddedChats)
            setAddedNames(addedChats) 
                       
        }
        
        fetchUser()
      
      
      
    }, [])
    

  return (
    <div className='w-full flex flex-col justify-center'>
        <button className='py-2 px-4 bg-yellow-600 text-white m-auto my-4 rounded-full ' onClick={()=>setaddBuddy(false)} >Back to chat</button>
        <div className='w-full flex flex-col justify-center'>
            
            {
                notAddedNames.map((user) =>(
                    <BuddyProfile  id ={user._id} name={user.displayName} key ={user._id} isGreen={true} setAddedNames={setAddedNames} setNotAddedNames={setNotAddedNames} />
                ))
                
            }
            {
                addedNames.map((user) =>(
                    <BuddyProfile  id ={user._id} name={user.displayName} key ={user._id} isGreen={false}  setNotAddedNames={setNotAddedNames} setAddedNames={setAddedNames}/>
                ))
                
            }
                  
        </div>
    </div>
  )
}

export default AddBuddy