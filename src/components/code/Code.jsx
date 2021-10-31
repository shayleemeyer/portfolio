import React from 'react';
import "./code.scss";
import { useState } from 'react';

export default function Code() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data= [
        {
            id: "0",
            title: "React.js",
            pointOne: "● Formal education from NuCamp Bootcamp as part of the Full-Stack Web Development program.",
            pointTwo: "● Focus on project creation and management from start to finish.",
            pointThree:"● Highlighted Competencies: Chrome DevTools,  Reactstrap, Redux, Responsive UI, Bootstrap",
            img: "assets.nosync/car.png"
        },
        {
            id: "1",
            title: "ReactNative.js",
            pointOne: "● Formal education from NuCamp Bootcamp as part of the Full-Stack Web Development program.",
            pointTwo: "● Focus on project creation and management from start to finish.", 
            pointThree:"● Highlighted Competencies: Android Studio,  AVD Manager, Redux, Store States and Dispatch",
            img: "assets.nosync/robot.jpg"
        },
        {
            id: "2",
            title: "Node",
            pointOne: "● Formal education from NuCamp Bootcamp as part of the Full-Stack Web Development program.",
            pointTwo: "● Focus on project creation and management from start to finish.", 
            pointThree:"● Highlighted Competencies: Postman,  Asynchronous I/O, MongoDb, RESTful API",
            img: "assets.nosync/gasket.jpg"
        },
       
       
     ];

     const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);

          console.log({currentSlide});
      };

console.log("first current slide" + currentSlide);
    return (
        
       <div className = 'work' id="work">
       <h1>Coding Experience</h1>
       
       <div style={{display: "flex", flexDirection:"row", alignItems: "center"}}>
       
            <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)`}}>
                {data.map((d)=>(

                
                <div className="container">
                    
                    <div className="item">
                        <div className="left">
                            <div className="leftContainer">
                                <h2>{d.title}</h2>
                                <p> {d.pointOne}</p>
                                <p>{d.pointTwo}</p>
                                <p>{d.pointThree} </p>
                            </div>
                        </div>
                        <div className="right">
                        <img src={d.img} alt=""/>
                        </div>

                    </div>
                </div>
                ))} 
                
            </div>
          
                <img
                    src="assets.nosync/arrow.png"
                    className="arrow left"
                    alt=""
                    onClick={()=> handleClick('left')}
                />
                <img
                    src="assets.nosync/arrow.png"
                    className="arrow right"
                    alt=""
                    onClick={()=> handleClick('right')}
                />
            </div>
        </div>
        
        
        
    )}