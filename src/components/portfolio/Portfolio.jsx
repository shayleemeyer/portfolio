import { useEffect, useState } from "react";
import "./portfolio.scss";
import {
  portfolioList
} from "../../data";


export default function Portfolio() {
const [selected/* , setSelected */]=useState("featured");
const [data, setData] = useState([]);

useEffect(() => {
    switch (selected) {
      case "activities":
        setData(portfolioList);
      
      default:
        setData(portfolioList);
    }
  }, [selected]);

    return (
        <div className = "portfolio" id="portfolio">
            <h1>Portfolio</h1>
           
            <div className="container">
        {data.map((d) => (
          <a href={d.link} target="_blank">
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
          </a>
        ))}
      </div>
    </div>
    )
    }