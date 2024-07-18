import React, { useState } from 'react'
import "./gameFinder.css"
import { RxPinBottom } from "react-icons/rx";

function GameFinder() {
    const games = ["PUBG" , "FREE FIRE", "BRAWL STARS", "DLS", "GTA"]
    const[ game, setGame] = useState(games[0])

    function handleClick () {
        const randomNumber = Math.floor(Math.random() * games.length)
        setGame(games[randomNumber])
    } 


  return (
    <div className='wrapppp'>
        <p>You can see the <br /> <span>Random</span> Game  </p>
        <RxPinBottom className='icon'/>
        <h2>{game}</h2>
       <button onClick={handleClick}>Pick Game</button>
    </div>
  )
}

export default GameFinder