import React from 'react';
import "./work.scss";
import { useState } from 'react';

export default function Work() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data= [


        {
            id: "1",
            title: "Product/VAVE Engineer",
            pointOne: "●	Created program that sifts through material attributes to generates viable matches to requested part type.",
            pointTwo: "●	Design real-world automotive parts using a variety of technologies for validation and failure analysis.",
            pointThree:"●	Major focus on product improvement through innovative and collaborative methods. "
        },
        {
            id: "2",
            title: "Product Design Engineering Intern",
            pointOne: "	●	Internal part design and reverse engineering of products.",
            pointTwo: "●	Created method to increase efficiency of CAD work using a solution that could potentially save the company hundreds of thousands of dollars. ",
            pointThree:"●	Global Purchasing and Marketing support. "
        },
        {
            id: "3",
            title: "Manufacturing Engineering Intern",
            pointOne: "●	Improved and designed systems that enhanced production rates. ",
            pointTwo: "●	Effectively coordinated projects with vendors discussing projects upwards of $75,000. ",
            pointThree:"●	Project Focus on ergonomics and efficiency."
        }
     ];

     const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };


    return (
        <div className = 'work' id="work">
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
                            <img src="assets/car.png" alt=""/>
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
    )}