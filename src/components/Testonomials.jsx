 
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import TestonomialCard from './TestimonialCard';
import '../assets/styles/Testimonial.css'

const testimonialData = [
  {
    image: '/images/testimonials-1.jpg',
    name: 'Saul Goodman',
    role: 'Ceo & Founder',
    quote: 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus...',
  },
  {
    image: '/images/testimonials-2.jpg',
    name: 'Sara Wilsson',
    role: 'Designer',
    quote: 'Export tempor illum tamen malis malis eram quae irure esse labore quem...',
  },
  {
    image: '/images/testimonials-3.jpg',
    name: 'Jena Karlis',
    role: 'Store Owner',
    quote: 'Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla...',
  },
  {
    image: '/images/testimonials-4.jpg',
    name: 'Matt Brandon',
    role: 'Freelancer',
    quote: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos...',
  },
  {
    image: '/images/testimonials-5.jpg',
    name: 'John Larson',
    role: 'Entrepreneur',
    quote: 'Quis quorum aliqua sint quem legam fore sunt eram irure aliqua...',
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section">
      <div className="container section-title" data-aos="fade-up">
        <h2>Testimonials</h2>
        <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 40 },
            1200: { slidesPerView: 3, spaceBetween: 10 },
          }}
          className="mySwiper"
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestonomialCard {...testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
