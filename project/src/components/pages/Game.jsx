import { useState } from "react"

export default function Game(){
    const [compScore, setCompScore]=useState()
    const [playerScore, setPlayerScore]=useState()
    const [result, setResult]=useState()
    const [gameStart, setGameStart]=useState(false)
    const generateNumComp=()=>{
        setGameStart(true)
      let num=  Math.round(Math.random()*100)
    //   console.log(num);
      setCompScore(num)
    }
    const generatePlayerScore=()=>{
        let num=  Math.round(Math.random()*100)
        setPlayerScore(num)
    }

    const getWinner=()=>{
        // console.log(compScore, playerScore);
        if(compScore>playerScore){
            setResult("computer");
        }else if(playerScore>compScore){
            setResult("User!!");
        }else{
            setResult("Tie");
        }
    }
    const restart=()=>{
        setCompScore()
        setPlayerScore()
        setResult()
    }
    return(
        <>
        <div className="text-center">
            <h1>Game</h1>
            <button className="btn btn-primary" onClick={generateNumComp} disabled={gameStart}>Start</button>
            {gameStart==true?<p>Game is running...</p>:""}
            <h1>Computer : {compScore}</h1>
            <button className="btn btn-info" onClick={generatePlayerScore}>Hit</button>
            <h1>Player : {playerScore}</h1>
            <button className="btn btn-warning" onClick={getWinner}>Result</button>
            <h1>Winner : {result}</h1>
            <h1>Winner : 
            {
            compScore>playerScore?"Computer"
            :
            playerScore>compScore?"User!!"
            :
            "Tie"
            }
            </h1>
            <button className="btn btn-dark" onClick={restart}>Restart</button>
            {/* ternary operators */}
            {/* condition?true:false */}
            {/* {5==15?"hello":"bye"} */}
        </div>
        </>
    )
}