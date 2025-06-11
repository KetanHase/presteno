import React from 'react';
import '../assets/styles/Digital.css'

const Digital = () => {
  return (
     <>
     <section id="hero" className="hero section">
        <img src="/images/hero-bg.jpg" alt="" data-aos="fade-in" />  
        <div className="container">
            <div className="row">
            <div className="col-lg-6">
                <h2 data-aos="fade-up" data-aos-delay="100">
                Bettter digital experience with Presento
                </h2>
                <p data-aos="fade-up" data-aos-delay={200}>
                We are team of talented designers making websites with Bootstrap
                </p>
                
                <div className="d-flex mt-4" data-aos="fade-up" data-aos-delay={300}>
                <a href="#about" className="btn-get-started">
                    Get Started
                </a>
                <a
                    href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                    className="glightbox btn-watch-video d-flex align-items-center"
                >
                    <i className="bi bi-play-circle" />
                    <span>Watch Video</span>
                </a>
                </div>
            </div>
            </div>
        </div>
   </section>

     
     </>
  )
}

export default Digital