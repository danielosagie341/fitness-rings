import React, {useState ,useEffect} from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Navigation, EffectFade, Autoplay} from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import TestimonialCard from './TestimonialCard';

const WordOnTheStreets = () => {

  return (
    <div className='pt-10 pb-28 flex flex-col items-center overflow-hidden'>
      <div className='text-center'>
        <h1 className='text-center text-pryBlue mt-10 mb-5 font-bold md:text-6xl sm:text-5xl text-3xl'>Word on the streets</h1>
        <div className='flex sm:flex-row flex-col justify-center items-center'>
          <span className='bg-orange px-3 py-2 m-3 rounded-lg'>Personal accounts</span>
          <span className='bg-lightBlue px-12 py-2 m-3 rounded-lg'>Vendors</span>
        </div>
      </div>

      <Swiper
        modules={[Navigation, EffectFade, Autoplay]}
        navigation
        effect={''}
        speed={15000}
        slidesPerView={2.2}
        direction="vertical"
        className='max-w-[300px] xl:max-w-[500px] h-[600px] overflow-hidden relative my-5 sm:hidden'
      >
        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>

        <SwiperSlide>
          <TestimonialCard />
        </SwiperSlide>
      </Swiper>
      

      <div className=' justify-center items-center mt-14 sm:px-36 px-10 relative hidden sm:flex'>
        <div className='this-is-a-form-of-comment-bg-whiteLinearGradientRight z-10 absolute top-0 left-0 w-full h-full'></div>
        <Swiper
          modules={[Navigation, EffectFade, Autoplay ]}
          navigation
          effect={''}
          speed={17000}
          loop={false}
          slidesPerView={2}
          className='xl:w-[800px] sm:w-[640px]'
        >
          <SwiperSlide>
           <TestimonialCard />
          </SwiperSlide>

          <SwiperSlide>
           <TestimonialCard />
          </SwiperSlide>

        </Swiper>
        <div className='this-is-a-form-of-comment-bg-whiteLinearGradientLeft z-10 absolute top-0 right-0 w-full h-full'></div>
      </div>
    </div>
  )
}

export default WordOnTheStreets