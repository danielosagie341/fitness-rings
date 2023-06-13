import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import { Navigation, EffectFade, Autoplay, Pagination} from 'swiper'
import 'swiper/css/navigation'
import 'swiper/css/effect-fade'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

const FeaturedImageLeftCarousel = ({image1, image2, image3, image4, image5, title, description, backgroundColor, hidden}) => {
  return (
    <div>
      <div className={`flex xl:flex-row flex-col-reverse justify-center items-center my-10 3xl:mx-auto 3xl:container ${backgroundColor} overflow-hidden`}>
       
        <Swiper
          modules={[ EffectFade, Autoplay ]}
          effect={'fade'}
          speed={300}
          loop={true}
          slidesPerView={1}
          autoplay={true}
          className={`w-full xl:w-[900px] h-[500px] xl:h-[600px]`} 
        >
          <SwiperSlide> <img src={image1} className={`w-full h-full object-cover`} alt="man with bag" /> </SwiperSlide>
          <SwiperSlide> <img src={image2} className={`w-full h-full object-cover`} alt="man with bag" /> </SwiperSlide>
          <SwiperSlide> <img src={image3} className={`w-full h-full object-cover`} alt="man with bag" /> </SwiperSlide>
          <SwiperSlide> <img src={image4} className={`w-full h-full object-cover`} alt="man with bag" /> </SwiperSlide>
          <SwiperSlide> <img src={image5} className={`w-full h-full object-cover`} alt="man with bag" /> </SwiperSlide>
        </Swiper>

        <div className='py-10 px-10 text-center flex-1 xl:text-left my-10'>
          <h2 className='3xl:text-6xl xl:text-[40px] sm:text-[50px] text-[30px] font-bold -mb-6'>{ title}</h2>
          <p className='py-8 3xl:text-2xl lg:text-xl sm:text-lg text-sm'>{description}</p>
        </div>
      </div>
    </div>
    
  )
}

export default FeaturedImageLeftCarousel