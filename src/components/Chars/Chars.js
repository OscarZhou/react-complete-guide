import React from "react"  
import Char from "./Char/Char.js"


const chars = (props) => 
    props.chars.map((char, index) => {
        return <Char 
            value={char}
            key={index} 
            clicked={() => props.clicked(index)} />
    })


export default chars