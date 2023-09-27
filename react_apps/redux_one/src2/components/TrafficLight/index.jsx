import React, { useEffect, useState } from 'react'
import './index.css'
const TrafficLight = () => {
    const [color, setColor] = useState("yellow");
    const [checkedStorage, setCheckedStorage] = useState(false);

    useEffect(() => {
        let colorFromStorage = localStorage.getItem("color");

        if (colorFromStorage) {
                setColor(colorFromStorage);
                setCheckedStorage(true);
        }
    }, [])

    let colors = ["red", "yellow", "green", "purple"];

    const handleClick = (colorString) => {
        setColor(colorString);
        localStorage.setItem("color", colorString)
    }  



    if (checkedStorage) {
        return <div className='container'>
                {
                colors.map((colorString) => {
                    let classesString = "circle "
                    if (color === colorString) {
                        classesString += colorString;
                    }
                    return (
                        <div 
                        key={colorString} 
                        onClick={() => handleClick(colorString)}  
                        className={classesString}>
                        </div>
                    )
                })}
            </div>
    } else {
     return <div>checking local storage...</div>
    }



  
}

export default TrafficLight