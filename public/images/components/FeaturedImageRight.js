import React from 'react'
import GetAppButton from './GetAppButton'

const FeaturedImageRight = ({image, title, title2, description, backgroundColor, display, color1, color2 }) => {
  return (
    <div>
      <div className={`flex xl:flex-row-reverse flex-col-reverse rounded-3xl bg-contain ${backgroundColor} sm:mx-20 items-center justify-center overflow-hidden 3xl:mx-auto 3xl:container`}>
       
        <img src={image} className="w-[300px] lg:w-[450px] hidden lg:block" alt="woman on glasses" />

        <div className='xl:pl-24 text-left 3xl:pl-52 2xl:px-40 lg:px-32 px-5 my-10'>
          <h2 className='3xl:text-6xl lg:text-5xl sm:text-[50px] text-[40px] font-extrabold lg:leading-snug'>
            <span className={`${color1}`}>{title}</span>
            <span className={`${color2}`}>{title2}</span>
          </h2>
          <p className='py-8 3xl:text-2xl lg:text-xl sm:text-lg text-sm'>{description}</p>
          
          <GetAppButton hasIcon={true} />
        </div>

         
      </div>
    </div>
  )
}

export default FeaturedImageRight