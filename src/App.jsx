import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Work from './components/work/Work';
import Testimonial from './components/testimonials/Testimonials';
import Portfolio from './components/portfolio/Portfolio';
import Personal from "./components/personal/Personal";
import Menu from "./components/menu/Menu";
import './app.scss';
import {useState} from "react";


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Work/>
        <Testimonial/>
        <Personal/>
      </div>
    </div>
  );
}

export default App;
