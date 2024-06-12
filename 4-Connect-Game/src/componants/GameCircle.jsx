import React from 'react'
import './Game.css'

const GameCircle = ({id,onClick,className}) => {

    //method 1 : to change div color
    //dynamic styling of changing color through id
    //style={id %2 ==0?{backgroundColor:"blue"}:{backgroundColor:"red"}}

    //method 2 : to change dynamically class of div to ch=gange backgroundColor
    // if number is even so baackground will be red otherwise blue

  return <div className={`GameCircle ${className}`}  onClick={() => onClick(id)}></div>;
}

export default GameCircle
