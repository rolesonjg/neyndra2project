
import React from 'react'
import TabsLadder from './Components/TabsLadder'

const App = () => {
  return (
    <div><TabsLadder /></div>
  )
}

export default App






























// import { useEffect, useState } from 'react'

// import './App.css'
// import Movingman from './Components/Movingman'
// import Stairs from './Stairs.jsx'
// import { PiCubeLight } from "react-icons/pi";
// import { HiMiniCube } from "react-icons/hi2";
// import { GiIceCube } from "react-icons/gi";
// import { GiCube } from "react-icons/gi";
// import { PiCubeFill } from "react-icons/pi";
// import { GrCube } from "react-icons/gr";
// import { BiSolidRectangle } from "react-icons/bi";
// function App() {

//   const [stepsImage, setStepsImage] = useState([0, 0, 0, 0, 0, 0, 0]);

//   useEffect(() => {
//     const interval = setInterval(() => {

//       setStepsImage(prevStepsImage => {
//         // Find the first 0 in the array and change it to 1
//         const newStepsImage = [...prevStepsImage];
//         const index = newStepsImage.indexOf(0); 
//         if (index !== -1) {
//           newStepsImage[index] = 1;
//         } else {
//           // Clear the interval if all elements are set to 1
//           clearInterval(interval);
//         }
//         console.log("stepsImage",newStepsImage)
//         return newStepsImage;
//       });
//     }, 5000);

//     return () => clearInterval(interval); // Cleanup the interval on component unmount
//   }, []);

//   return (
//     // className='containerpromax0'
//       <div style={{position:"relative"}} >
//         <h1 style={{fontSize:"100px"}}>
//         <span style={{color:"#B5C18E",position:"absolute",top:"400px",left:"210px",zIndex:"0"}}><BiSolidRectangle /></span>
//       <span style={{color:"#B5C18E",position:"absolute",top:"340px",left:"290px",zIndex:"1"}}><BiSolidRectangle /></span>

//       {/* New spans with adjusted top and left properties */}
//       <span style={{color:"#B5C18E",position:"absolute",top:"280px",left:"370px",zIndex:"1"}}><BiSolidRectangle /></span>
//       <span style={{color:"#B5C18E",position:"absolute",top:"220px",left:"450px",zIndex:"1"}}><BiSolidRectangle /></span>
//       <span style={{color:"#B5C18E",position:"absolute",top:"160px",left:"530px",zIndex:"1"}}><BiSolidRectangle /></span>
//       <span style={{color:"#B5C18E",position:"absolute",top:"100px",left:"610px",zIndex:"1"}}><BiSolidRectangle /></span>
//         </h1>
 
//       </div>
    
   
//   )
// }

// export default App
