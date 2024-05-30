// import React, { useState, useEffect } from 'react';
// import './styles/Stairs.css';

// const Stairs = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [points, setPoints] = useState(0);
//   const [lastStepCompleted, setLastStepCompleted] = useState(false);
//   const [lastStepPointsAdded, setLastStepPointsAdded] = useState(false);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       if (currentStep < 7) {
//         setPoints((prevPoints) => prevPoints + 10);
//         setCurrentStep((prevStep) => prevStep + 1);
//       }
//     }, 10000);

//     return () => clearInterval(interval);
//   }, [currentStep]);

//   useEffect(() => {
//     if (currentStep === 7 && !lastStepPointsAdded) {
//       setTimeout(() => {
//         setPoints((prevPoints) => prevPoints + 10);
//         setLastStepCompleted(true);
//         setLastStepPointsAdded(true);
//       }, 10000);
//     }
//   }, [currentStep, lastStepPointsAdded]);

//   return (
//     <div >
//       <div className="points">Points: {points}</div>
//       <div className="stairs-container">
//         <div className={`step step-1 ${currentStep > 1 ? 'passed' : ''} ${currentStep === 1 ? 'character' : ''}`}></div>
//         <div className={`step step-2 ${currentStep > 2 ? 'passed' : ''} ${currentStep === 2 ? 'character' : ''}`}></div>
//         <div className={`step step-3 ${currentStep > 3 ? 'passed' : ''} ${currentStep === 3 ? 'character' : ''}`}></div>
//         <div className={`step step-4 ${currentStep > 4 ? 'passed' : ''} ${currentStep === 4 ? 'character' : ''}`}></div>
//         <div className={`step step-5 ${currentStep > 5 ? 'passed' : ''} ${currentStep === 5 ? 'character' : ''}`}></div>
//         <div className={`step step-6 ${currentStep > 6 ? 'passed' : ''} ${currentStep === 6 ? 'character' : ''}`}></div>
//         <div className={`step step-7 ${currentStep > 7 || lastStepCompleted ? 'passed' : ''} ${currentStep === 7 ? 'character' : ''}`}></div>
//       </div>
//     </div>
//   );
// };

// export default Stairs;



import React, { useState, useEffect } from 'react';
import './App.css'; // Import any styling you need

const Box = ({ color }) => {
  return <div className="box" style={{ backgroundColor: color }}></div>;
};

const Stairs = () => {
  const [colors, setColors] = useState(["white","white","white","white","white"]);
  useEffect(() => {
    const interval = setInterval(() => {
      setColors(prevColors => {
        const index = prevColors.findIndex(color => color === 'white');
        if (index !== -1) {
          const newColors = [...prevColors]; // Create a copy of the colors array
          newColors[index] = 'blue'; // Change color to blue (or any other color you want)
          console.log("colors,",colors)
          return newColors; // Return the updated colors array
         
        }
        // return prevColors; // If no 'white' color is found, return the original colors array
      });
      
    }, 1000); 

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {colors?.map((color, index) => (
        <Box key={index} color={color} />
      ))}
    </div>
  );
};

export default Stairs;
