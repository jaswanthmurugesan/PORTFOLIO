import Hero from "./components/Hero";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import PixelSnow from  "./components/PixelSnow/PixelSnow";

function App() {
  return (
    <div style={{ position: 'relative', minHeight: '100vh', width: '100%' }}>
      <PixelSnow 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none'
        }}
      /> 
      <Hero />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
