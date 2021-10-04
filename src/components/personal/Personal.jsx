import { useEffect, useState } from "react";
import PersonalList from "../personalList/PersonalList";
import "./personal.scss";
import {
  featuredPersonal,
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
      id: "activities",
      title: "Activities",
    },
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
          case "activities":
            setData(featuredPersonal);
            break;
          case "rhonda":
            setData(rhondaPortfolio);
            break;
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
            setData(featuredPersonal);
        }
      }, [selected]);
    return (
        <div className = "personal" id="personal">
            <h1>Things I love!</h1>
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
          <div className="item">
            <img
              src={d.img}
              alt=""
            />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
    )
    }
