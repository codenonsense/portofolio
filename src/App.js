import About from "./components/About";
import Contact from "./components/Contact";
import Experiance from "./components/Experiance";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";


function App() {
  return (
    <div>
      <NavBar/>
      <Home/>      
      <SocialLinks/>
      <About/>
      <Experiance/>
      <Contact/>
    </div>    
  );
}

export default App;
