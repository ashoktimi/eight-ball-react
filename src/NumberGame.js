import React, {useState} from "react";

const NumberGame = (props)=>{
    const greet=()=>{
        console.log("Hello, Good morinig!")
    }
    const genRandom = () => Math.floor(Math.random()*10)+1;
    console.log(genRandom)
    const [guess, setGuess] =useState(genRandom)
    const [target, setTarget] =useState(genRandom)
    return(
        <div>
            <h1>Target Num: {target}</h1>
            <h1 style={{color: target===guess ? 'green':'red'}}>Your Guess: {guess}</h1>
            <button onClick={()=>setGuess(genRandom)}>Generate Number</button>
            <button onClick={greet}>Greet</button>
        </div>
    )
}

export default NumberGame