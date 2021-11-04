import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Work from './components/work/Work';
import Testimonial from './components/testimonials/Testimonials';
import Portfolio from "./components/portfolio/Portfolio";
import Personal from "./components/personal/Personal";
import Menu from "./components/menu/Menu";
import Leadership from "./components/leadership/Leadership";
import Code from "./components/code/Code";
import './app.scss';
import {useState} from "react";
import Footer from "./components/Footer/Footer";
/* import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
 */

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Code/>
        <Portfolio/>
        <Work/>
        <Leadership/>
        <Personal/>
        <Testimonial/>
       <Footer/> 
        
      </div>
    </div>
  );
}

export default App;
