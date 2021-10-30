import './topbar.scss';
import {Person, Mail} from "@material-ui/icons";

export default function Topbar({menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && " active")} id="topbar">
            <div className="wrapper">
                <div className="left">
                    <a className="logo" href ="#intro">Shaylee Meyer</a>
                    <div className="itemContainer">
                        <Person/>
                        <span>906-282-6127</span>
                    </div>
                    <div className="itemContainer">
                        <Mail/>
                        <span>shayleeomeyer@gmail.com</span>
                    </div>
                </div>
                
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
