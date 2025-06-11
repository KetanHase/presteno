 
import React from 'react';

const TestimonialCard = ({ image, name, role, quote }) => {
  return (
    <div className="swiper-slide">
      <div className="testimonial-item">
        <img src={image} className="testimonial-img" alt={name} />
        <h3>{name}</h3>
        <h4>{role}</h4>
        <div className="stars">
          {Array(5).fill().map((_, i) => (
            <i key={i} className="bi bi-star-fill"></i>
          ))}
        </div>
        <p>
          <i className="bi bi-quote quote-icon-left"></i>
          <span>{quote}</span>
          <i className="bi bi-quote quote-icon-right"></i>
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
