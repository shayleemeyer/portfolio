import React from 'react';
import "./code.scss";
import { useState , useEffect, Grid, FormRow} from 'react';
import { iconList } from '../../data';

export default function Code() {
    const [selected/* , setSelected */]=useState("featured");
    const [data, setData] = useState([]);
    
    useEffect(() => {
        switch (selected) {
          case "activities":
            setData(iconList);
          break;
          default:
            setData(iconList);
        }
      }, [selected]);
    
return (
        
       <div className = 'code' id="code">
       <h1>Coding Experience</h1>
       
       <div >
     
                 <ul className="skills">
                 {data.map((d) => (
                    <a href={d.link} target="_blank" rel="noreferrer" >
                        <li className="skill">
                            <img
                                src={d.img}
                                alt=""
                            />
                        </li>
                    </a>
                 
                    ))}
                    
                </ul>
            </div> 

        </div>  
        
    )}