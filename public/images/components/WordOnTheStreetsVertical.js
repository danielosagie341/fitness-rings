import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade, Autoplay, } from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import TestimonialCard from './TestimonialCard';

const WordOnTheStreetsVertical = () => {
  return (
      <div className='pt-10 pb-28 xl:px-20 xl:ml-20 flex flex-col-reverse xl:flex-row justify-center items-center'>
            <Swiper
                modules={[Navigation, EffectFade, Autoplay]}
                navigation
                effect={''}
                speed={15000}
                slidesPerView={2.2}
                direction="vertical"
                loop
                autoplay={{delay: 0}}
                className='max-w-[300px] xl:max-w-[500px] h-[600px] overflow-hidden relative'
            >
                <div className=' bg-whiteLinearGradient z-40 absolute top-0 right-0 w-full h-full'></div>
                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>

                <SwiperSlide>
                  <TestimonialCard />
                </SwiperSlide>
            </Swiper>

          <div className='flex flex-col items-center xl:items-start xl:w-[700px] px-5 md:px-32 lg:px-40 xl:pl-20 text-center xl:text-left'>
                <h1 className='my-7 font-bold lg:text-6xl sm:text-5xl text-2xl' >Word on the streets</h1>
              
                <span className='bg-lightBlue px-12 py-2 rounded-lg' >Vendors</span>

                <p className='my-7'>Check out what other vendors are saying about us!</p>

                <div className={`bg-pryBlue w-fit h-fit px-4 py-5 rounded-xl relative`}>
                    <p className='text-white text-sm xl:text-base'>Get the Beam App its free</p>
                </div>
          </div>

      </div>
  )
}

export default WordOnTheStreetsVertical