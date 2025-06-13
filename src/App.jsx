 import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Service from './pages/Service';
import Teams from './pages/Teams';
import Portfolios from './pages/Portfolios';
import Contacts from './pages/Contacts';
import Blog from './pages/Blog';
import ErrorPage from './pages/ErrorPage';



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
        <Route path="/service" element={<Service />} />
        <Route path="/team" element={<Teams />} />
        <Route path="/portfolio" element={<Portfolios />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/blog" element={<Blog />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
       <Footer />
    </Router>
     </>
  );
}

export default App;
