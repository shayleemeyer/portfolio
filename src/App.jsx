import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Work from './components/work/Work';
import Testimonial from './components/testimonials/Testimonials';
import Portfolio from './components/portfolio/Portfolio';
import Contact from "./components/contact/Contact";
import './app.scss';
import {useState} from "react";


function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Work/>
        <Testimonial/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
