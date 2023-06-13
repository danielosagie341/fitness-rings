import React from 'react'

const CoreValue = ({backgroundColor, title, description, extra}) => {
  return (
      <div className='shadow-black shadow-xl w-[600px] rounded-3xl px-5 lg:px-10 py-5 my-10 lg:my-20 mx-5 sm:mx-20 lg:mx-10'>
          <div className={`w-[50px] lg:w-[80px] h-[50px] lg:h-[80px] ${backgroundColor} rounded-full`}></div>
          <h1 className='font-bold text-xl lg:text-4xl py-3'>{ title}</h1>
          <p className='text-xs lg:text-sm py-3'>{ description}</p>
      <p className='text-xs lg:text-sm py-3 text-pryBlue font-semibold text-right'>{ extra}</p>
      </div>
  )
}

export default CoreValue