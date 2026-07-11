import logo from './logo.svg';
import './App.css';
import Home from './screens/Home';
import About from './screens/About';
import Skills from './screens/Skills';
import Projects from './screens/Projects';
import Education from './screens/Education';
import Services from './screens/Services';
import Contact from './screens/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <> 
      <Navbar />
        <Home />   
        <About />  
       <Skills />  
        <Projects />   
          <Education />   
         <Services /> 
         <Contact /> 

         </>
    </div>
  );
}

export default App;

    

