import React from "react"
import GameCard from "./GameCard"
const Games = () => {
    const tenzi = "TENZI is the world's fastest dice game! Fast, fun, and engaging, TENZI is perfect for table top beginners and aficionados alike. Every player gets 10 dice. The object of the game is to roll the dice as fast as possible, the player who gets all dice on the same number and yells \"TENZI!\" is the winner."
    const hangman = "Hangman is a guessing game for two or more players. One player thinks of a word, phrase or sentence and the other tries to guess it by suggesting letters within a certain number of guesses. Originally a Paper-and-pencil game, there are now electronic versions."
    const tictactoe = "Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players who take turns marking the spaces in a three-by-three grid with X or O. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner."
    const memoryGame = "Matching games are games that require players to match similar elements. Participants need to find a match for a word, picture, or card. For example, students place 30 word cards; composed of 15 pairs, face down in random order. "

    return (
        <div className="px-24 py-8">
        <h1 className="text-center text-8xl">Games</h1>
        <div className="grid grid-cols-2 mt-4 gap-4">
        <GameCard title="Tenzi" about={tenzi} url={"/games/tenzi"} />
        <GameCard title="Hangman" about={hangman} />
        <GameCard title="Tic Tac Toe" about={tictactoe} />
        <GameCard title="Memory Game" about={memoryGame} />
        </div>
        </div>
    )
}

export default Games
