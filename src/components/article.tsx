import React from 'react'

const Article = ({title, description}: {title: string, description: string}) => {
    return (
        <div>
            <div className=" mx-[5%] h-[80px] rounded-[12px] mb-[10px] flex flex-row bg-indigo-200 ">
                <div className="w-2/5 h-full rounded-l-lg bg-blue-600 text-center flex justify-center align-middle text-white" >
                    <div  className='m-auto'>{title}</div>
                </div>
                <div className='w-3/5 text-center' >
                   <div className='m-auto' >{description}</div>  
                </div>
            </div>
        </div>
    )
}

export default Article