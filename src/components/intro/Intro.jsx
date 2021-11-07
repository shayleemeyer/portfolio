import React from 'react';
import "./intro.scss";
import {init} from 'ityped';
import { useEffect, useRef } from 'react';

export default function Intro() {

    const textRef = useRef();

    useEffect(()=> {
        init(textRef.current, {
            showCursor: false,
            backDelay: 2000,
            backSpeed: 60,
            strings: ["Full Stack Web Developer",  "Engineer", "DeBugging Super Hero", "Tech and Philosophy Nerd", "Dog Mom" ],
            
        })
    }, [])
    return (
        <div className="introWrapper" id="intro" >
            <div className="introContent">
           
                <div className="wrapper">
                <img src="/assets.nosync/leafshadow.jpg" alt=""/>
                    <h2>Hi There, I'm</h2>
                    <h1>Shaylee Meyer</h1>
                    <h3>
                        The coolest <span ref={textRef}></span>
                    </h3>
                    <h4>(self-proclaimed^ )</h4>
                    
                </div>
                
            </div>
        </div>
    )
}
