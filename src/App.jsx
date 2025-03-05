
import { useState } from 'react'
import StartGame from './Component/StartGame'
import GamePlay from './Component/GamePlay';

function App() {
  const [isGamestarted , setIsGameStarted] = useState(false);

  const toggleGamaPlay= () =>{
    setIsGameStarted((prev)=>!prev)
  }
  
  return (
    <>
    {
       isGamestarted ? <GamePlay/>:<StartGame toggle={toggleGamaPlay}/> 
    }
      
    </>
  )
}

export default App
