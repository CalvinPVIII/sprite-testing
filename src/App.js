import React, { useState } from 'react';
import kickWindup1 from './goku sprites/kick windup.png'
import kickWindup2 from './goku sprites/kick windup2.png'
import sledge1 from './goku sprites/sledge 1.png'
import sledge2 from './goku sprites/sledge 2.png'
import idle from './goku sprites/idle 1.png'

function App() {
  const [currentStatus, setCurrentStatus] = useState(idle)
 
  let goku = currentStatus;
  const kickWindup = [kickWindup1, kickWindup2, idle];
  const sledge = [sledge1, sledge2, idle]
  const playAnimation = (spriteArray) => {
    for (let i=0; i < spriteArray.length; i ++){
      setTimeout(function() {
        setCurrentStatus(spriteArray[i])
      },150 * i)
    }
  }



  return (
    <div className="App">
      <img onClick={() => {playAnimation(sledge)} }src={goku}/>
    </div>
  );
}

export default App;
