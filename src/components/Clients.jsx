import React from 'react';
import '../assets/styles/Clients.css'

const Clients = () => {
  return (
     <>
     
     <section id="clients" className="clients section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="swiper init-swiper">
            <div className="swiper-wrapper align-items-center">
                <div className="swiper-slide">
                <img src="images/client-1.png" className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide">
                <img src="images/client-2.png" className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide">
                <img src="images/client-3.png" className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide">
                <img src="images/client-4.png" className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide">
                <img src="images/client-5.png" className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide">
                <img src="images/client-6.png" className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide">
                <img src="images/client-7.png" className="img-fluid" alt="" />
                </div>
                <div className="swiper-slide">
                <img src="images/client-8.png" className="img-fluid" alt="" />
                </div>
            </div>
            <div className="swiper-pagination" />
            </div>
        </div>
    </section>

     
     </>
  )
}

export default Clients