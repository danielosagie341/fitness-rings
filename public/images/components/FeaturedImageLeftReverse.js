import React from 'react'

const FeaturedImageLeft = ({image, title, description, backgroundColor}) => {
  return (
    <div>
      <div className={`text-white flex xl:flex-row-reverse flex-col-reverse xl:justify-center items-center my-10 3xl:mx-auto 3xl:container ${backgroundColor}`}>
       
        <div className=''>
          <img src={image} alt="man with bag" />
        </div>

        <div className='flex-1 xl:w-[40%] w-[95%] 2xl:pl-72 sm:px-32 p-5 xl:pt-20 flex flex-col items-end xl:text-right'>
          <div>
            <h2 className='3xl:text-6xl text-3xl font-bold -mb-6'>{ title}</h2>
            <p className='py-8 3xl:text-2xl text-sm'>{description }</p>
          </div>
        </div>

      </div>
    </div>
    
  )
}

export default FeaturedImageLeft