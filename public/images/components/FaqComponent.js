import React from 'react'
import Faq from './Faq'

const FaqComponent = () => {
  return (
      <div className='flex flex-col justify-center items-center pt-10 pb-32' >
          <h1 className='text-center text-pryBlue my-5 font-bold md:text-5xl sm:text-4xl text-2xl' >FAQs</h1>
          <div className='flex flex-wrap justify-center max-w-[1500px]'>    
              <Faq title={'Question heading'} description={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. NesciuntLorem ipsum '} />
              <Faq title={'Question heading'} description={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. NesciuntLorem ipsum '} />
              <Faq title={'Question heading'} description={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. NesciuntLorem ipsum '} />
              <Faq title={'Question heading'} description={ 'Lorem ipsum dolor sit amet consectetur adipisicing elit. NesciuntLorem ipsum '} />
          </div>
      </div>
  )
}

export default FaqComponent