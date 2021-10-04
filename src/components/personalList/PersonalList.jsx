import './personalList.scss'; 

export default function PersonalList({id, title, active, setSelected}) {
    return(
        <li className={active ? "personalList active" : "personalList"} 
        onClick={()=>setSelected(id)}>

            {title}
        </li>
    )
} 