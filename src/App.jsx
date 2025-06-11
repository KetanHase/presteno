 import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';



function App() {

  useEffect(() => {
  AOS.init({
    duration: 1000, // animation duration in ms
    once: true,     // whether animation should happen only once
  });
}, []);
  return (
    <>
    
    <Router>
       <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
       <Footer />
    </Router>
     </>
  );
}

export default App;
