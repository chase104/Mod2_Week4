import { useContext, useState } from 'react'
import imgOne from './assets/imageOne.png'
import imgTwo from './assets/imageTwo.png'
import imgThree from './assets/imageThree.png'
import viteLogo from '/vite.svg'
import './App.css'
import { mainContext } from './context/MainProvider'
import SelectIcon from './components/SelectIcon'

function App() {

  const {background, setBackground, userIcon} = useContext(mainContext);
 
  let userImage;
  if (userIcon == 1) {
    userImage = imgOne
  } else if (userIcon == 2) {
    userImage = imgTwo
  } else {
    userImage = imgThree
  }
  return (
    <div style={{backgroundColor: background}}>
      <nav>
        <img src={userImage} style={{maxWidth: "60px"}} />
      </nav>
      <button>change background</button>

      <SelectIcon />
    </div>
  )
}

export default App
