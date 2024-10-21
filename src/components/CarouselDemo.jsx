import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import slide1 from '../images/DALL·E 2024-10-14 00.41.52 - A close-up of a polished amber stone with its natural golden and honey tones, showing its intricate internal patterns and inclusions. The background i.webp'; 
import slide2 from '../images/DALL·E 2024-10-14 00.44.51 - A close-up view of multiple amber stones with lighter shades of golden, pale yellow, and soft honey hues, arranged together. Some stones are rough and.webp'; 
import slide3 from '../images/DALL·E 2024-10-14 00.47.11 - A close-up view of multiple amber stones with varying shades of golden, honey, and orange hues, arranged together. Some stones are rough and unpolishe.webp'; 

export default function CarouselDemo() {
  return (
    <div className="w-full mx-auto mt-20 -mt-16"> {/* Negatif margin */}
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={0}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
        }}
        className="w-full"
      >
        <SwiperSlide>
          <img src={slide1} alt="Slide 1" className="h-screen w-full object-cover top-0" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="Slide 2" className="h-screen w-full object-cover top-0" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="Slide 3" className="h-screen w-full object-cover top-0" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
} 
