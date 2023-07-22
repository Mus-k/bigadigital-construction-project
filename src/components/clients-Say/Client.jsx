import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './Client.css';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';

const Client = () => {
  return (
    <div className='swiperContainer'>
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='slide'>Slide 1</SwiperSlide>
        <SwiperSlide className='slide'>Slide 2</SwiperSlide>
        <SwiperSlide className='slide'>Slide 3</SwiperSlide>
        <SwiperSlide className='slide'>Slide 4</SwiperSlide>
       
      </Swiper> 
    </div>
  )
}

export default Client
