import Navbar from "./assets/components/nav-bar";
import Home from "./assets/components/home";
import About from "./assets/components/about";
import Projects from "./assets/components/projects";
import Contact from "./assets/components/contact";
import Foot from "./assets/components/foot";
function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <Home />
      <div id="About" className="h-[80px]"></div>
      <About />
      <div id="Projects" className="h-[96px] bg-[#012301]"></div>
      <Projects />
      <Contact />
      <Foot />
    </div>
  );
}

export default App;
