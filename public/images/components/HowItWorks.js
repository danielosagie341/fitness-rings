import React from 'react'

const HowItWorks = ({image1, image2, image3, image4, image5}) => {
  return (
      <div className='flex flex-col justify-center items-center'>
          <h1 className='text-center text-pryBlue my-20 font-bold md:text-5xl text-4xl'>How it works</h1>
          <div className='flex flex-wrap max-w-[1100px] justify-center'>
            <img src={image1} className='sm:w-[300px] w-[200px] mx-6' alt="how it works" />
            <img src={image2} className='sm:w-[300px] w-[200px] mx-6' alt="how it works" />
            <img src={image3} className='sm:w-[300px] w-[200px] mx-6' alt="how it works" />
            <img src={image4} className='sm:w-[300px] w-[200px] mx-6' alt="how it works" />
            <img src={image5} className='sm:w-[300px] w-[200px] mx-6' alt="how it works" />
          </div>
      </div>
  )
}

export default HowItWorks