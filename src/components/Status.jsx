import React from 'react';
import '../assets/styles/Status.css'
import Counter from './Counter';

const Status = () => {
  return (
     <>
     
     <section id="stats" className="stats section">
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
            <div className="row gy-4">
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-emoji-smile" />
                <div className="stats-item">
                <span>
                    <Counter end={232} duration={10} />
                </span>
                <p>Happy Clients</p>
                </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-journal-richtext" />
                <div className="stats-item">
                <Counter end={521} duration={10} />
                <p>Projects</p>
                </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-headset" />
                <div className="stats-item">
                 <Counter end={1463} duration={10} />
                <p>Hours Of Support</p>
                </div>
            </div>
            {/* End Stats Item */}
            <div className="col-lg-3 col-md-6 d-flex flex-column align-items-center">
                <i className="bi bi-people" />
                <div className="stats-item">
                <Counter end={15} duration={5} />
                <p>Hard Workers</p>
                </div>
            </div>
            {/* End Stats Item */}
            </div>
        </div>
    </section>

     
     </>
  )
}

export default Status