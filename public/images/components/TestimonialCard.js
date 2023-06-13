import React from 'react'

const TestimonialCard = () => {
  return (
      <div>
        <div className='w-[300px] bg-bgWhite sm:text-xl text-sm sm:px-5 sm:py-5 xl:mx-14 p-4 rounded-3xl h-[250px] flex flex-col justify-between'>
              <span className='font-bold text-[10px]'>Sunday 3rd of August 2022, By 19:00</span>
              <p className='py-3 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nobis in hic quibusdam aperiam dignissimos cum expedita quam, aspernatur </p>
              <div className='flex font-bold items-center'>
                <div className='w-10 h-10 bg-bgWhite rounded-xl mr-4'>
                  <img src="./images/zara-aminat.png" />
                </div>
                <span>Zara Aminat</span>
              </div>
          </div>
        </div> 
  )
}

export default TestimonialCard