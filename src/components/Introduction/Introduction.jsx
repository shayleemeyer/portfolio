import "./introduction.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Full Stack Web Developer",  "Engineer", "DeBugging Super Hero", "Tech and Philosophy Nerd", "Dog Mom" ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      
      <div className="left">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Shaylee Meyer</h1>
          <h3>
            The Coolest <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
      <div className="right">
        <div className="imgContainer">
          <img src="assets.nosync/leaveswhite.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}