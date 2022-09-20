import React from "react"
import { useNavigate } from "react-router-dom"
const GameCard = ({ title, about, url }) => {

    const navigate = useNavigate()

    return(
        <div className="opacity-80 bg-white p-4 rounded-md
        shadow-lg shadow-black" onClick={() => navigate(url)}>
        <h1 className="text-4xl">{title}</h1>
        <p className="mt-4">{about}</p>
        </div>
    )
}

export default GameCard
