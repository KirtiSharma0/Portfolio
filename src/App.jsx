import React from 'react'
import Navbar from "./components/Navbar/Navbar";
import Home from './components/Navbar/Home';
import About from './components/Navbar/About';
import Experience from './components/Navbar/Experience';
import Projects from './components/Navbar/Projects';
import Footer from './components/Navbar/Footer';

function App() {
return( <div className="bg-[#171d32] h-auto w-full overflow-hidden">  
         <Navbar/>
         <Home/>
        <About/>
        <Experience/>
        <Projects/>
        <Footer/>
    </div>
);
  
}

export default App;
