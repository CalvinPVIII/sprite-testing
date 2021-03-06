import React, { useState } from 'react';
import kickWindup1 from './goku sprites/kick windup.png'
import kickWindup2 from './goku sprites/kick windup2.png'
import sledge1 from './goku sprites/sledge 1.png'
import sledge2 from './goku sprites/sledge 2.png'
import special1 from './goku sprites/special 1.png'
import special2 from './goku sprites/special 2.png'
import idle from './goku sprites/idle 1.png'


function App() {
  const [currentStatus, setCurrentStatus] = useState(idle)
 
  let goku = currentStatus;
  const kickWindup = [kickWindup1, kickWindup2, idle];
  const sledge = [sledge1, sledge2, idle]
  const special = [special1, special2, idle]
  const playAnimation = (spriteArray) => {
    for (let i=0; i < spriteArray.length; i ++){
      setTimeout(function() {
        setCurrentStatus(spriteArray[i])
      },150 * i)
    }
  }

  const move = (e) => {
    if (e.code === "Digit1"){
      playAnimation(kickWindup)
    }else if (e.code === "Digit2"){
      playAnimation(sledge)
    }else if (e.code === "Digit3"){
      playAnimation(special)
    }else{
      setCurrentStatus(idle)
    }
    
  }
  document.addEventListener('keydown', move);

  return (
    <div className="App">
      <img onClick={() => {playAnimation(special)} }src={goku}/>
    </div>
  );
}

export default App;
