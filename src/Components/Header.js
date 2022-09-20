import React from "react"
import { useNavigate } from "react-router-dom";
// IMAGES AND ICONS
import coinIcon from "../img/icons/8bit-coin.png"
const Header = () => {
    
    let currentPath = window.location.pathname
    let navigate = useNavigate()

    return(
        <div className="flex gap-4 justify-between items-center px-32 py-4 
        w-full bg-blue border-b border-dark-blue">    
            <div className={`flex gap-4 items-center cursor-pointer hover:animate-bounce
                ${currentPath === '/' ? 'animate-bounce' : ''}`} onClick={() => {navigate("/")}}>
                <img className="w-10" src={coinIcon} alt="" />
                <span className="font-bold" onClick={() => navigate("/")}>My Web Portfolio</span> 
            </div>
            <div className="flex gap-2 font-bold">
                <button className={`p-2 border-4 rounded-sm bg-white hover:animate-bounce
                ${currentPath === '/about-me' ? 'animate-bounce' : ''}`}
                onClick={() => navigate("/about-me")}>About Me!</button>
                <button className={`p-2 border-4 border-black text-white bg-black
                rounded-sm hover:animate-bounce ${currentPath === '/games' ? 'animate-bounce' : ''} `}
                onClick={()=>{navigate("/games")}}>Games!</button>
                <button className="p-2 border-4 border-black bg-green rounded-sm
                hover:animate-bounce">Applications!</button>
                <button className="p-2 border-4 border-black bg-yellow rounded-sm
                hover:animate-bounce">E-commerce!</button>
                <button className="p-2 border-4 border-black bg-red rounded-sm
                hover:animate-bounce">Personal!</button>
            </div>
            
        </div>
    )
}


export default Header
