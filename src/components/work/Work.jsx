import React from 'react';
import "./work.scss";
import { useState } from 'react';

export default function Work() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data= [
        {
            id: "0",
            title: "Product/VAVE Engineer",
            pointOne: "●	Created program that sifts through material attributes to generates viable matches to requested part type.",
            pointTwo: "●	Design real-world automotive parts using a variety of technologies for validation and failure analysis.",
            pointThree:"●	Major focus on product improvement through innovative and collaborative methods. ",
            img: "assets/car.png"
        },
        {
            id: "1",
            title: "Product Design Engineering Intern",
            pointOne: "	●	Internal part design and reverse engineering of products.",
            pointTwo: "●	Created method to increase efficiency of CAD work using a solution that could potentially save the company hundreds of thousands of dollars. ",
            pointThree:"●	Global Purchasing and Marketing support. ",
            img: "assets/gasket.jpg"
        },
        {
            id: "2",
            title: "Manufacturing Engineering Intern",
            pointOne: "●	Improved and designed systems that enhanced production rates. ",
            pointTwo: "●	Effectively coordinated projects with vendors discussing projects upwards of $75,000. ",
            pointThree:"●	Project Focus on ergonomics and efficiency.",
            img: "assets/robot.jpg"
        }
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
       <h1>Work History</h1>
       
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
                src="assets/arrow.png"
                className="arrow left"
                alt=""
                onClick={()=> handleClick('left')}
            />
            <img
                src="assets/arrow.png"
                className="arrow right"
                alt=""
                onClick={()=> handleClick('right')}
            />
            </div>
        </div>
        
        
    )}