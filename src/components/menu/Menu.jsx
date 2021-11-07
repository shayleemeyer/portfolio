import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen}) {
    return (
        <div className={"menu " +(menuOpen && " active")}>
            <ul>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#intro">Home</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#code">Coding Competencies</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#portfolio">Portfolio</a>
                </li> 
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#work">Work History</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#leadership">Leadership Experience</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#personal">Interests</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#testimonials">Testimonials</a>
                </li>
                <li onClick={()=>setMenuOpen(false)}>
                    <a href="#footer">Get Connected</a>
                </li>
            </ul>
        </div>
    )
}
