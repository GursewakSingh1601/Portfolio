import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience";
import Works from "./components/Works"
import Feedbacks from "./components/Feedbacks";
import Contact from "./components/Contact"
import { StarsCanvas } from "./components/canvas";
import CopyRight from "./components/CopyRight";
import Tech from "./components/Tech";
const App = () => {
  return (
    <BrowserRouter>
  <div className='relative z-0 bg-primary'>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
          <About />
      </div>
      <Experience/>
      <Works/>
      <Feedbacks/>
      <Tech/>
      <div className="relative z-0">
        <Contact/>
        <StarsCanvas/>
        <CopyRight/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
