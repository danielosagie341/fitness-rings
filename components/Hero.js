import React from 'react'

const Hero = () => {
  return (
      <div className=' text-white p-6 3xl:container'>
        <div className='bg-fuchsia-900 bg-opacity-50 p-6 rounded-3xl flex justify-between items-end'>
            <div>
                <div className='flex items-center'>
                    <img className='h-8 w-8 object-contain' src="./images/fire.png" alt="" />
                    <small>Get to your Goals</small>
                </div>
                <p>Start closing rings <br /> today</p>
            </div>
            
            <div className='h-28 relative w-28'>
                <img className='absolute object-contain -top-10' src="./images/model.png" alt="" />
            </div>
        </div>

      </div>
  )
}

export default Hero