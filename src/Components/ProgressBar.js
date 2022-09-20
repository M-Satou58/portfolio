import React from "react"

const ProgressBar = ({text, percent}) => {
    return(
        <div className="">
            <div className="flex justify-between mb-1">
                <span className="">{text}</span>
                <span className="">{`${percent}%`}</span>
            </div>
            <div className="w-full bg-black h-2.5">
        <div className="bg-pink h-2.5" style={{width: `${percent}%`}}></div>
            </div>
        </div>
    )
}

export default ProgressBar
