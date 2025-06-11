import React from 'react';
import '../assets/styles/AboutSection.css'

const AboutSection = () => {
  return (
     <>
     
      <section id="about" className="about section section-bg dark-background">
            <div className="container position-relative">
                <div className="row gy-5">
                <div
                    className="content col-xl-5 d-flex flex-column"
                    data-aos="fade-up"
                    data-aos-delay={100}
                >
                    <h3>Voluptatem dignissimos provident quasi</h3>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute
                    irure dolor in reprehenderit
                    </p>
                    <a href="/" className="about-btn align-self-center align-self-xl-start">
                    <span>About us</span> <i className="bi bi-chevron-right" />
                    </a>
                </div>
                <div className="col-xl-7" data-aos="fade-up" data-aos-delay={200}>
                    <div className="row gy-4">
                    <div className="col-md-6 icon-box position-relative">
                        <i className="bi bi-briefcase" />
                        <h4>
                        <a href="/" className="stretched-link">
                            Corporis voluptates sit
                        </a>
                        </h4>
                        <p>
                        Consequuntur sunt aut quasi enim aliquam quae harum pariatur
                        laboris nisi ut aliquip
                        </p>
                    </div>
                    {/* Icon-Box */}
                    <div className="col-md-6 icon-box position-relative">
                        <i className="bi bi-gem" />
                        <h4>
                        <a href="/" className="stretched-link">
                            Ullamco laboris nisi
                        </a>
                        </h4>
                        <p>
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                        officia deserunt
                        </p>
                    </div>
                    {/* Icon-Box */}
                    <div className="col-md-6 icon-box position-relative">
                        <i className="bi bi-broadcast" />
                        <h4>
                        <a href="/" className="stretched-link">
                            Labore consequatur
                        </a>
                        </h4>
                        <p>
                        Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores
                        omnis facere
                        </p>
                    </div>
                    {/* Icon-Box */}
                    <div className="col-md-6 icon-box position-relative">
                        <i className="bi bi-easel" />
                        <h4>
                        <a href="/" className="stretched-link">
                            Beatae veritatis
                        </a>
                        </h4>
                        <p>
                        Expedita veritatis consequuntur nihil tempore laudantium vitae
                        denat pacta
                        </p>
                    </div>
                    {/* Icon-Box */}
                    </div>
                </div>
                </div>
            </div>
        </section>

     
     
     </>
  )
}

export default AboutSection