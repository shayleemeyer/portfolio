import { useEffect, useState } from "react";
import PersonalList from "../personalList/PersonalList";
import "./personal.scss";
import {

  rhondaPortfolio,
  philosophyPortfolio,
  readingPortfolio,
  podcastPortfolio,
} from "../../data";


export default function Personal() {
const [selected, setSelected]=useState("featured");
const [data, setData] = useState([]);
const list = [
    
    {
      id: "rhonda",
      title: "Rhonda",
    },
    {
      id: "podcasts",
      title: "Podcasts",
    },
    {
      id: "books",
      title: "Reading List",
    },
    {
      id: "philosophy",
      title: "Philosophy",
    },
  ];

    useEffect(() => {
        switch (selected) {
          case "podcasts":
            setData(podcastPortfolio);
            break;
          case "books":
            setData(readingPortfolio);
            break;
          case "philosophy":
            setData(philosophyPortfolio);
            break;
         default: 
            setData(rhondaPortfolio);
            break;
        }
      }, [selected]);
    return (
        <div className = "personal" id="personal" rel="noreferrer">
            <h1>Interests</h1>
            <ul>
                {list.map((item)=> (
                    <PersonalList title={item.title} 
                    active={selected === item.id} 
                    setSelected={setSelected} 
                    id={item.id}/>
                ))}
            </ul>
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
