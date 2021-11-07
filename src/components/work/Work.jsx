import React from 'react';
import "./work.scss";
import { useState } from 'react';

export default function Work() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data= [
        {
            id: "0",
            title: "Product/VAVE Engineer",
            pointOne: "●	Created a program using React.js that sifts through material attributes to generate viable matches to requested part type.",
            pointTwo: "●	Design real-world automotive parts using a variety of technologies for validation and failure analysis.",
            pointThree:"●	Extensive focus on product improvement through innovative and collaborative methods. ",
            img: "assets.nosync/car.png"
        },
        {
            id: "1",
            title: "Product Design Engineering Intern",
            pointOne: "	●	Lead internal part design and reverse engineering of products.",
            pointTwo: "●	Developed a method to decrease CAD design time by nearly 80%. ",
            pointThree:"●	Acted as global purchasing and marketing support. ",
            img: "assets.nosync/gasket.jpg"
        },
        {
            id: "2",
            title: "Manufacturing Engineering Intern",
            pointOne: "●	Improved and designed systems that enhanced production rates. ",
            pointTwo: "●	Effectively coordinated projects with vendors discussing projects worth upwards of $75,000. ",
            pointThree:"●	Project Focus on ergonomics and efficiency rates.",
            img: "assets.nosync/robot.jpg"
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