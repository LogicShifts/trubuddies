import React from 'react'

const Article = ({title, description}: {title: string, description: string}) => {
    return (
        <div>
            <div className=" mx-[5%] h-[80px] rounded-[12px] mb-[10px] flex flex-row bg-indigo-200">
                <div className="w-2/5 h-full rounded-l-lg bg-blue-600">{title}-{description}</div>
            </div>
        </div>
    )
}

export default Article