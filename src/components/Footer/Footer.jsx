import React, {useState} from "react";
import "./footer.scss";
import { SocialIcon } from 'react-social-icons';
import {Button, Modal, ModalHeader, ModalBody,  ModalFooter} from "reactstrap";


function Footer(){
    

return (
  <div className="footer" style={{height: "12rem"}} >
      <div className="container">
          <div className="header">
              <h1>Let's Work Together</h1>
          </div>
          <div className="social">
                <code className="github">
                    <SocialIcon network="github" fgColor="#bbc0c9" url="https://github.com/shayleemeyer" target="_blank" />
                </code> 
                <code className="linkedin">
                    <SocialIcon url="https://www.linkedin.com/in/shaylee-meyer-855428179/" target="_blank" network="linkedin" fgColor="#bbc0b9" />
                </code> 
                <code className="mail">
                    <SocialIcon url="mailto: shayleeomeyer@gmail.com" target="_blank" network="email" fgColor="#bbc0b9" />
                </code> 
            </div>
        <div className="rights">
            <p>© 2021 Shaylee Meyer. All rights reserved.</p>
        </div>
      </div>
    
  </div>
)};

export default Footer;