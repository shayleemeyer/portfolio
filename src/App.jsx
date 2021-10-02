import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Work from './components/work/Work';
import Testimonial from './components/testimonials/Testimonials';
import Portfolio from './components/portfolio/Portfolio';
import Contact from "./components/contact/Contact";
import './app.scss';



function App() {
  return (
    <div className="app">
      <Topbar/>
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
