import React from 'react'

const FeaturedImageLeft = ({image, image2, imageDisplay, imageDisplay2, title, description, backgroundColor, hidden}) => {
  return (
    <div className='px-10 xl:px-0'>
      <div className={`flex xl:flex-row flex-col-reverse justify-center items-center my-10 3xl:mx-auto 3xl:container overflow-hidden rounded-3xl ${backgroundColor}`}>
       
        <img src={image} className={`${imageDisplay} w-full object-cover xl:w-[600px]`} alt="man with bag" />
        <img src={image2} className={`${imageDisplay2} w-full object-cover xl:w-[600px]`} alt="man with bag" />

        <div className='p-5 flex-1 xl:text-left my-10'>
          <h2 className='3xl:text-6xl sm:text-[44px] text-[25px] font-bold -mb-6'>{ title}</h2>
          <p className='py-8 3xl:text-2xl lg:text-xl sm:text-lg text-sm'>{description}</p>
          <div className={`bg-pryBlue w-fit h-fit px-4 py-3 rounded-xl relative ${hidden}`}>
            <img src="./images/get-beam-app.svg" alt="get-app" />
            <img src="./images/bling.svg" className='absolute 2xl:block xl:hidden -right-10 -bottom-10' alt="bling" />
          </div>
        </div>

      </div>
    </div>
    
  )
}

export default FeaturedImageLeft