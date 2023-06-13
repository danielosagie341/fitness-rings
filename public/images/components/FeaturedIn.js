import React from 'react'

const FeaturedIn = ({image1, image2, image3}) => {
  return (
      <div className='bg-bgWhite py-10 flex flex-col sm:flex-row justify-center items-center'>
          <div className='flex items-center sm:px-20 justify-center sm:pb-0 pb-7'>
                <p className='font-bold text-center text-3xl'>Featured in</p>
          </div>

          <div className='flex lg:flex-row flex-col sm:px-20 items-center justify-center'>
              <img src={image1} className='sm:w-72 w-56 m-10' alt="the cable logo" />
          </div>
      </div>
  )
}

export default FeaturedIn