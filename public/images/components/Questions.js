import React from 'react'

const Questions = ({ title, description }) => {
    
    const characterLength = (text) => {
        if (text.length > 70) 
            return text.slice(0, 70) + '...'
         
        return text
    }

  return (
    <div className=''>
        <div className='flex items-center justify-between m-5 py-7 px-5 rounded-xl shadow-2xl w-fit'>
            <div className='w-[300px] pr-7'>
                <h1 className='font-bold md:text-xl text-base pb-1' >{ title}</h1>
                <p className='text-xs' >{ characterLength(description)}</p>
            </div>
            <img src="./images/arrow-right.png" className='sm:h-[50px] h-[35px]' alt="arrow right" />
        </div>
    </div>
  )
}

export default Questions