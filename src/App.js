import Certificates from "./components/Certificates/certificates";
import Coding from "./components/Coding/coding";
import Contact from "./components/Contact/contact";
import Declare from "./components/Declare/declare";
import Footer from "./components/Footer/footer";
import Intro from "./components/Intro/intro";
import Navbar from "./components/NavBar/navbar";
import Project from "./components/Project/project";
import ProjectPhoto from "./components/ProjectPhoto/projectphoto";
import Skills from "./components/Skills/skills";
import Works from "./components/Works/works";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Coding/>
      <Project/>
      <ProjectPhoto/>
      <Works/>
      <Certificates/>
      <Declare/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
