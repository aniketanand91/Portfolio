import './App.css';
import About from './components/About';
import Cover from './components/Cover';
import Navbar from './components/Navbar';
import Experience from './components/Experience';
import Project from './components/Project';
import Project2 from './components/Project2';
// import Skills from './components/Skills'
import Contact from './components/Contact';
import CardCarousel from './components/CardCarasoul';
// import Slider from './components/Slider';
// import { Autoplay,  Swiper } from 'swiper/modules';

function App() {
  return (
    

    <div className="App">
      {/* <div className='side-nav'>
       <Navbar/>
      </div> */}
      <Navbar/>
      <Cover/>
      <About/>   
      <Experience/>
      <Project2/>
      <Project/>
      {/* <Skills/> */}
      <CardCarousel/>
      <Contact/>
      </div>
  );
}

export default App;
