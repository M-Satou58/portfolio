import React from "react"

import ProgressBar from "./ProgressBar.js"
// IMAGES AND ICONS
import facebookIcon from "../img/icons/icons8-facebook-30.png"
import twitterIcon from "../img/icons/icons8-twitter-circled-30.png"
import githubIcon from "../img/icons/icons8-github-30.png"
import shio from "../img/icons/shio.jpg"
const Main = () => {
    return(
        <div className="px-24 py-8" >
            <div className="flex items-center gap-4">
                <img className="w-20 rounded-full shadow-md shadow-black" src={shio} alt="" />
                <h1 className="p-4 border-4 border-dotted border-black 
                bg-blue text-black shadow-md shadow-black">Hi I'm Kyle Pagayon.
                This is everything about me!</h1>
            </div>
             <div className="mt-8 grid grid-cols-12 items-start gap-4">
                <fieldset className="col-span-4 border-4 border-dotted 
                border-black text-black bg-green shadow-md shadow-black p-2">
                    <legend className="bg-green border-t-4 border-dotted">/ My Socials ˖◛⁺⑅♡ /</legend>
                    <div className="flex items-center justify-center gap-4">
                        <img src={facebookIcon} alt="" />
                        <img src={twitterIcon} alt="" />
                        <img src={githubIcon} alt="" />
                    </div>
                </fieldset>

                <fieldset className="mt-8 col-span-8 border-4 border-dotted 
                border-black text-black bg-green shadow-md shadow-black gap-4">
                    <legend className="bg-green border-t-4 border-dotted">/ About Me (╯•﹏•╰) /</legend>
                    <p className="p-4">Hi My name is Kyle Pagayon I am 20 years 
                    old I live at lores country homes antipolo city
                    My hobbies are programming, games and cycling. 
                    When I graduate I wan't to become a fullstack web develover 
                    that helps user find information or just simply have fun browsing the website.</p>
                </fieldset>
            </div> 
            <div className="mt-8 grid grid-cols-12 w-full items-start gap-4">
                <fieldset className="col-span-4 border-4 border-dotted border-black 
                bg-red text-black p-4 shadow-md shadow-black">
                    <legend className="bg-red border-t-4 border-dotted">/ Personal Info (。┰ω┰。) /</legend> 
                    <ul className="list-disc ml-4">
                        <li>Name: Kyle Pagayon</li>
                        <li>Age: 20</li>
                        <li>Gender: Male</li>
                        <li>Birthday: March 25 2002</li>
                    </ul>

                </fieldset>

                <fieldset className="mt-8 col-span-8 border-4 border-dotted 
                    border-black bg-red text-black shadow-md shadow-black p-4">
                    <legend className="bg-red border-t-4 border-dotted">/ Frontend Knowledge (ó ꒳ ò✿) /</legend>
                    <ProgressBar text="HTML(5)" percent="85"/>
                    <ProgressBar text="CSS(3)" percent="75"/>
                    <ProgressBar text="Javascript" percent="65"/>
                    <ProgressBar text="React" percent="60"/>
                </fieldset>
            </div>


             <div className="mt-4 grid grid-cols-12 items-start gap-4">

                <fieldset className="col-span-4 border-4 border-dotted 
                border-black text-black bg-yellow shadow-md shadow-black p-4">
                    <legend className="bg-yellow border-t-4 border-dotted">/ My Hobbies ♡＼(￣▽￣)／♡ /</legend>
                     <ul className="list-disc ml-4 bg-yellow">
                        <li>Programming</li>
                        <li>Computer Games</li>
                        <li>Cycling</li>
                    </ul>
        
                </fieldset>

                <fieldset className="mt-8 col-span-8 border-4 border-dotted
                border-black text-black bg-yellow shadow-md shadow-black p-4">
                    <legend className="bg-yellow border-t-4 border-dotted">/ Backend Knowledge ♡ (ʘ ꒳ ʘ✿) /</legend>
                    <ProgressBar text="NodeJS" percent="50"/>
                    <ProgressBar text="MongoDB" percent="40"/>
                </fieldset>
            </div> 


        </div>



    )
}

export default Main
