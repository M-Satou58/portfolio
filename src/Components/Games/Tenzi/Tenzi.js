import React from "react"
import Dice from "./Dice"
const Tenzi = () => {
    const [dice, setDice] = ([])

    const start = () => {
    }

    start()
    return(
        <div className="flex flex-col justify-center items-center px-24 py-8">
            <h1 className="text-5xl">Tenzi</h1>
            <div className="grid grid-cols-5 gap-4 mt-8">
                <Dice />
                <Dice />
                <Dice />
                <Dice />
                <Dice />
                <Dice />
                <Dice />
                <Dice />
                <Dice />
                <Dice />
            </div>
        </div>
    )
}

export default Tenzi
