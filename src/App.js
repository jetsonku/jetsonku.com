import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Works from "./components/Works";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() { 
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Experience />
      <Works />
      <Contact />
    </div>
  );
}
export default App;