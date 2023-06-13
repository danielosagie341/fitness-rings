import React from 'react'

const Faq = ({title, description}) => {
  return (
    <div className='bg-f3White flex justify-center sm:w-auto w-[100vw]'>
      <div className='flex items-center justify-between m-5 py-7 px-5 sm:px-10 rounded-xl shadow-2xl sm:w-[570px] w-[90%]'>
        <div className='w-[400px]'>
          <h1 className='font-bold md:text-3xl text-base pb-1' >{ title}</h1>
          <p className='md:text-sm text-xs' >{ description}</p>
        </div>
        <img src="./images/arrow-right.png" className='sm:h-[50px] h-[35px]' alt="arrow right" />
      </div>
    </div>
  )
}

export default Faq