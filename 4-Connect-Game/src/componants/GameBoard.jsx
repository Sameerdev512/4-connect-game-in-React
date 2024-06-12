import React from 'react'
import GameCircle from './GameCircle'
import './Game.css'
import {useState} from 'react'

const No_Player =0;
const Player_1 = 1;
const Player_2 = 2;

const GameBoard = () => {

    const [circle,setCircle]=useState(Array(16).fill(0));
    const [currentPlayer,setCurrentPlayer]=useState("Player_1");

    function handleCircle(id)
    {
        // console.log("clicked on :"+id);
        
        
        if(id===1 || id == 2)
          {
            
          }
          else{
            let newCircle = [...circle];
            newCircle[id] = currentPlayer; // setting currentPlayer so that first click will be red
            setCircle(newCircle);
            //it sets currentPlayer value for next click 
            setCurrentPlayer(currentPlayer === Player_1?Player_2:Player_1)
            // console.log(circle);
          }
        
    }

    const renderCircle=(id)=>{
        return <GameCircle id={id} onClick={handleCircle} className={`Player_${circle[id]}`} />;
    }

  return (
    <div className="GameBoard">
      {renderCircle(0)}
      {renderCircle(1)}
      {renderCircle(2)}
      {renderCircle(3)}
      {renderCircle(4)}
      {renderCircle(5)}
      {renderCircle(6)}
      {renderCircle(7)}
      {renderCircle(8)}
      {renderCircle(9)}
      {renderCircle(10)}
      {renderCircle(11)}
      {renderCircle(12)}
      {renderCircle(13)}
      {renderCircle(14)}
      {renderCircle(15)}
    </div>
  );
}

export default GameBoard
