import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import '../assets/styles/Clients.css';

const Clients = () => {
  return (
    <section id="clients" className="clients section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          modules={[Pagination, Autoplay]}
          slidesPerView={2}
          spaceBetween={30}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          className="clients-swiper"
        >
          <SwiperSlide>
            <img src="/images/client-1.png" className="img-fluid" alt="Client 1" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/client-2.png" className="img-fluid" alt="Client 2" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/client-3.png" className="img-fluid" alt="Client 3" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/client-4.png" className="img-fluid" alt="Client 4" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/client-5.png" className="img-fluid" alt="Client 5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/client-6.png" className="img-fluid" alt="Client 6" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/client-7.png" className="img-fluid" alt="Client 7" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="/images/client-8.png" className="img-fluid" alt="Client 8" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Clients;
