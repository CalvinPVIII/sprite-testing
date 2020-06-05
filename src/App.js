import React, { useState } from 'react';
import kickWindup1 from './goku sprites/kick windup.png'
import kickWindup2 from './goku sprites/kick windup2.png'
import idle from './goku sprites/idle 1.png'

function App() {
  const [currentStatus, setCurrentStatus] = useState(idle)
 
  let goku = currentStatus;
  const kickWindup = [kickWindup1, kickWindup2];
  const kickAnimation = () => {
    for (let i=0; i < kickWindup.length; i ++){
      setTimeout(function() {
        setCurrentStatus(kickWindup[i])
      }, 400 * i)
    }
  }

  if (currentStatus === idle){
    kickAnimation();
  }


  return (
    <div className="App">
      <img src={goku}/>
    </div>
  );
}

export default App;
