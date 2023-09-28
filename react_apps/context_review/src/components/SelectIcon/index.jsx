import imgOne from '../../assets/imageOne.png'
import imgTwo from '../../assets/imageTwo.png'
import imgThree from '../../assets/imageThree.png'
import {useState, useContext} from 'react'
import './index.css'
import { mainContext } from '../../context/MainProvider'

const SelectIcon = () => {
    const [selectedIcon, setSelectedIcon] = useState(1)
    const {setUserIcon} = useContext(mainContext)
  return (
    <div>
        <img 
        onClick={() => setSelectedIcon(1)}
        className={`icon-img ${selectedIcon === 1 ? "selected-icon" : ""} `}   
        src={imgOne} 
        />
        <img  
        onClick={ () => setSelectedIcon(2)}
        className={`icon-img ${selectedIcon === 2 ? "selected-icon" : ""} `}    
        src={imgTwo} 
        />
        <img  
        onClick={ () => setSelectedIcon(3)}
        className={`icon-img ${selectedIcon === 3 ? "selected-icon" : ""} `}   
        src={imgThree} />
        <button onClick={() => setUserIcon(selectedIcon)}>submit</button>
    </div>
  )
};

export default SelectIcon;