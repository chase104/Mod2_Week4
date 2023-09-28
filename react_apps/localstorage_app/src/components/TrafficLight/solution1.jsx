import React, { useState } from 'react'
import './index.css'
const TrafficLight = () => {
    const [color, setColor] = useState("yellow")

  return (
    <div className='container'>
        <div 
        onClick={() => setColor("red")} 
        className={`circle    ${color === "red" ? "red" : "" }      `}>
        </div>

        <div  
        onClick={() => setColor("yellow")}  
        className={`circle    ${color === "yellow" ? "yellow" : "" }      `}>
        </div>

        <div  
        onClick={() => setColor("green")} 
        className={`circle    ${color === "green" ? "green" : "" }      `}>
        </div>
    </div>
  )
}

export default TrafficLight