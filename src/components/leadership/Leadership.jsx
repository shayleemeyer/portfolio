
/* import "./leadership.scss"; */

import React, { Component } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

/* export default function Leadership() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data= [
        {
            id: "1",
            title: "President, Alpha Xi Delta",
            pointOne: "●	Voted 2019 President of the Year amongst 10 other Greek organizations",
            pointTwo: "● Created tools using logical formulas to completely restructure organization of chapter finances.",
            pointThree:"●	Responsible for all chapter related legalities and activities.  ",
            img: "assets/alphaxicrest.png"
        },
        {
            id: "2",
            title: "Vice President, National Panhellenic Conference",
            pointOne: "	●	Elected supervisor of Junior Executive Board",
            pointTwo: "●	Coordination of events that saw the attendance of over 300 people. ",
           
            img: "assets/panhel.png"
        },
        {
            id: "3",
            title: "Vice President of Member Development, Alpha Xi Delta",
            pointOne: "● Elected supervisor of Member Development council and all related activities ",
            pointTwo: "●	Only elected Emerging Leader to attend leadership conference in Maryland.",
            pointThree:"●	Event coordination fostering the growth of the chapter and individual members.",
            img: "assets/alphaxi.jpg"
        }
     ];

     const handleClick = (way) => {
        way === "left"
          ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
          : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
      };


    return (
        
       <div className = 'leadership' id="leadership">
       <h1>Leadership Experience</h1>
       
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
        
        
    )} */

    const data= [
        {
            id: "1",
            title: "President, Alpha Xi Delta",
            pointOne: "●	Voted 2019 President of the Year amongst 10 other Greek organizations",
            pointTwo: "● Created tools using logical formulas to completely restructure organization of chapter finances.",
            pointThree:"●	Responsible for all chapter related legalities and activities.  ",
            img: "assets/alphaxicrest.png"
        },
        {
            id: "2",
            title: "Vice President, National Panhellenic Conference",
            pointOne: "	●	Elected supervisor of Junior Executive Board",
            pointTwo: "●	Coordination of events that saw the attendance of over 300 people. ",
           
            img: "assets/panhel.png"
        },
        {
            id: "3",
            title: "Vice President of Member Development, Alpha Xi Delta",
            pointOne: "● Elected supervisor of Member Development council and all related activities ",
            pointTwo: "●	Only elected Emerging Leader to attend leadership conference in Maryland.",
            pointThree:"●	Event coordination fostering the growth of the chapter and individual members.",
            img: "assets/alphaxi.jpg"
        }
     ];

    export default class SimpleSlider extends Component {
        render() {
          const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
          };
          return (
            <div>
              <h2> Single Item</h2>
              <Slider {...settings}>
               {data.map((data)=>{
                   return(
                       <div>
                          <h1>7</h1> 
                       </div>
                   )
               })}
              </Slider>
            </div>
          );
        }
      }