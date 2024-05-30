import React, { useState } from 'react'
import "../styles/Movingman.css"
import { Canvas } from '@react-three/fiber';
import Scene from './Scene';

const Movingman = () => {
    
    const [step, setStep] = useState(0);

    const handleNextStep = () => {
      setStep((prevStep) => (prevStep + 1) % 6); 
    };
  
    return (
      <div className="App" style={{position:"relative"}}  >
        {/* <div style={{height:"75px",width:"120px",borderTopLeftRadius:"5px",borderTop:"5px solid #EADEDE",borderLeft:"5px solid #EADEDE",position:"absolute",top:"550px",left:"50px"}}></div>
        <div style={{height:"75px",width:"120px",borderTopLeftRadius:"5px",borderTop:"5px solid #EADEDE",borderLeft:"5px solid #EADEDE",position:"absolute",top:"470px",left:"170px"}}></div> */}
    
    <Canvas>
        <Scene />
      </Canvas>

        <div></div>
      </div>
    );
  
}

export default Movingman