import React from 'react'
import Send from './Send'
import Received from './Received'

const MainChat = () => {
  return (
    <div className='h-[80%] bg-blue-100 pt-2  flex flex-col overflow-y-scroll' >
        <Send  text={"hii"} />
        <Received  text={"hello"} />
        <Send  text={"hii"} />
        <Received  text={"hello"} />

        <Send  text={"hii"} />
        <Received  text={"hello"} />
        <Send  text={"hii"} />
        <Received  text={"hello"} />
        <Send  text={"hii"} />
        <Received  text={"hello"} />
        <Send  text={"hii"} />
        <Received  text={"hello"} />
        
    </div>
  )
}

export default MainChat