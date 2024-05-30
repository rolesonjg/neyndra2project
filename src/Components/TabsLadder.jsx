


// import React, { useState } from 'react'
// import * as Tabs from '@radix-ui/react-tabs';
// import "../styles/TabsLadder.css"
// import Zeroth from "../assets/boatsailing.jpg"
// import First from "../assets/foreigndog.jpg"
// import Second from "../assets/sunset.jpg"
// import Fourth from "../assets/3rd.png"
// import { GrNext } from "react-icons/gr";
// import { IoIosArrowBack } from "react-icons/io";
// import { IoIosArrowForward } from "react-icons/io";
// import { div } from 'three/examples/jsm/nodes/Nodes.js';


//   function TabsComponent() {
//     const [activeTab, setActiveTab] = useState(0);
  
//     const handleNext = () => {
//       setActiveTab((prevTab) => (prevTab + 1) % tabsData.length);
//     };
  
//     const handlePrevious = () => {
//       setActiveTab((prevTab) => (prevTab - 1 + tabsData.length) % tabsData.length);
//     };

//     const tabsData = [
//       {
//         label: "Individual",
//         content: (
//           <div key="0">
//             <h1 className={activeTab === 0 ? 'animate__animated animate__fadeIn' : ''} style={{ textAlign: "center" }}>Heading one</h1>
//             <p className={activeTab === 0 ? 'animate__animated animate__fadeIn' : ''} style={{ textAlign: "center" }}>lsomething aout the para</p>
//             <img className={activeTab === 0 ? 'animate__animated animate__fadeInUp' : ''} style={{ height:"500px", width:"100%",borderRadius:"10px" }} src={Zeroth} alt="Second" />
//           </div>
//         )
//       },
//       {
//         label: "Corporate",
//         content: (
//           <div key="1">
//             <h1 className={activeTab === 1 ? 'animate__animated animate__fadeIn' : ''} style={{ textAlign: "center" }}>Heading two</h1>
//             <p className={activeTab === 1 ? 'animate__animated animate__fadeIn' : ''} style={{ textAlign: "center" }}>Get started your dream career with us</p>
//             <img className={activeTab === 1 ? 'animate__animated animate__fadeInUp' : ''} style={{ height: "500px", width:"100%"  ,borderRadius:"10px"}} src={Second} alt="Second" />
//           </div>
//         )
//       },
//       {
//         label: "Partner",
//         content: (
//           <div key="2">
//             <h1 className={activeTab === 2 ? 'animate__animated animate__fadeIn' : ''} style={{ textAlign: "center" }}>Heading three</h1>
//             <p className={activeTab === 2 ? 'animate__animated animate__fadeIn' : ''} style={{ textAlign: "center" }}>Get started your dream career with us</p>
//             <img className={activeTab === 2 ? 'animate__animated animate__fadeInUp' : ''} style={{ height: "500px", width:"100%",borderRadius:"10px" }} src={First} alt="Second" />
//           </div>
//         )
//       },
//       {
//         label: "Collage",
//         content: (
//           <div key="3">
//             <h1 className={activeTab === 3 ? 'animate__animated animate__fadeIn' : ''} style={{ textAlign: "center" }}>Heading four</h1>
//             <p className={activeTab === 3 ? 'animate__animated animate__fadeIn' : ''} style={{ textAlign: "center" }}>Get started your dream career with us</p>
//             <img className={activeTab === 3 ? 'animate__animated animate__fadeInUp' : ''} style={{ height: "500px", width:"100%",borderRadius:"10px" }} src={Second} alt="Second" />
//           </div>
//         )
//       }
//     ];
    
//     return (
//       <div style={{height:"100%", }}>
//         <div style={{ margin: "10%" }}>
//         <div   className="TabsRoot">
//           <div className="TabsList" aria-label="Manage your account">
//             {tabsData.map((tab, index) => (
//               <button
//                 key={index}
//                 style={{fontFamily:" Inter, sans-serif",  color: "#4D4D4D",border:"1px solid white",borderBottom:"2px solid white", }}
//                 className={`TabsTrigger ${activeTab === index ? 'active animate__animated animate__pulse ' : ''}`}
//                 onClick={() => setActiveTab(index)}
//               >
//                 {tab.label}
//               </button>
//             ))}
//           </div>
//           <div className="TabsContent" style={{ position: "relative" }}>
//             {tabsData[activeTab].content}
//             <div
//               style={{ position: "absolute", top: "50%", left: "10px", fontSize: "25px", cursor: "pointer" }}
//               onClick={handlePrevious}
//             >
//               {/* <IoIosArrowBack /> */}
//             </div>
//             <div
//               style={{ position: "absolute", top: "50%", right: "10px", fontSize: "25px", cursor: "pointer" }}
//               onClick={handleNext}
//             >
//               {/* <IoIosArrowForward /> */}
//             </div>
//           </div>
//         </div>
//       </div>
//       </div>
      
//     );
//   }

// export default TabsComponent;







import React, { useState } from 'react'
import * as Tabs from '@radix-ui/react-tabs';
import "../styles/TabsLadder.css"
import Zeroth from "../assets/boatsailing.jpg"
import First from "../assets/foreigndog.jpg"
import Second from "../assets/sunset.jpg"
import Fourth from "../assets/3rd.png"
import { GrNext } from "react-icons/gr";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { div } from 'three/examples/jsm/nodes/Nodes.js';


  function TabsComponent() {
    const [activeTab, setActiveTab] = useState(0);
  
    const handleNext = () => {
      setActiveTab((prevTab) => (prevTab + 1) % tabsData.length);
    };
  
    const handlePrevious = () => {
      setActiveTab((prevTab) => (prevTab - 1 + tabsData.length) % tabsData.length);
    };

    const tabsData = [
      {
        label: "Individual",
        content: (
          <div key="0">
            <h1 className={activeTab === 0 ? 'animate__animated animate__fadeIn' : ''} style={{ textAlign: "center" }}>Heading one</h1>
            <p className={activeTab === 0 ? 'animate__animated animate__fadeIn' : ''} style={{ textAlign: "center" }}>lsomething aout the para</p>
            <img className={activeTab === 0 ? 'animate__animated animate__fadeInUp' : ''} style={{ height:"500px", width:"100%",borderRadius:"10px" }} src={Zeroth} alt="Second" />
          </div>
        )
      },
      {
        label: "Corporate",
        content: (
          <div key="1">
            <h1 className={activeTab === 1 ? 'animate__animated animate__fadeIn' : ''} style={{ textAlign: "center" }}>Heading two</h1>
            <p className={activeTab === 1 ? 'animate__animated animate__fadeIn' : ''} style={{ textAlign: "center" }}>Get started your dream career with us</p>
            <img className={activeTab === 1 ? 'animate__animated animate__fadeInUp' : ''} style={{ height: "500px", width:"100%"  ,borderRadius:"10px"}} src={Second} alt="Second" />
          </div>
        )
      },
      {
        label: "Partner",
        content: (
          <div key="2">
            <h1 className={activeTab === 2 ? 'animate__animated animate__fadeIn' : ''} style={{ textAlign: "center" }}>Heading three</h1>
            <p className={activeTab === 2 ? 'animate__animated animate__fadeIn' : ''} style={{ textAlign: "center" }}>Get started your dream career with us</p>
            <img className={activeTab === 2 ? 'animate__animated animate__fadeInUp' : ''} style={{ height: "500px", width:"100%",borderRadius:"10px" }} src={First} alt="Second" />
          </div>
        )
      },
      {
        label: "Collage",
        content: (
          <div key="3">
            <h1 className={activeTab === 3 ? 'animate__animated animate__fadeIn' : ''} style={{ textAlign: "center" }}>Heading four</h1>
            <p className={activeTab === 3 ? 'animate__animated animate__fadeIn' : ''} style={{ textAlign: "center" }}>Get started your dream career with us</p>
            <img className={activeTab === 3 ? 'animate__animated animate__fadeInUp' : ''} style={{ height: "500px", width:"100%",borderRadius:"10px" }} src={Second} alt="Second" />
          </div>
        )
      }
    ];
    
    return (
      <div style={{height:"100%", }}>
        <div style={{ margin: "10%" }}>
        <div   className="TabsRoot">
          <div className="TabsList" aria-label="Manage your account">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                style={{fontFamily:" Inter, sans-serif",  color: "#4D4D4D",border:"1px solid white",borderBottom:"2px solid white", }}
                className={`TabsTrigger ${activeTab === index ? 'active animate__animated animate__pulse ' : ''}`}
                onClick={() => setActiveTab(index)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="TabsContent" style={{ position: "relative" }}>
            {tabsData[activeTab].content}
            <div
              style={{ position: "absolute", top: "50%", left: "10px", fontSize: "25px", cursor: "pointer" }}
              onClick={handlePrevious}
            >
              {/* <IoIosArrowBack /> */}
            </div>
            <div
              style={{ position: "absolute", top: "50%", right: "10px", fontSize: "25px", cursor: "pointer" }}
              onClick={handleNext}
            >
              {/* <IoIosArrowForward /> */}
            </div>
          </div>
        </div>
      </div>
      </div>
      
    );
  }

export default TabsComponent;
