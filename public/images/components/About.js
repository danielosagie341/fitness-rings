import React from 'react'

const About = ({backgroundColor, title, description}) => {
  return (
      <div className={`${backgroundColor} text-left py-20 px-10 lg:px-40 xl:px-72`}>
          <h1 className='text-2xl sm:text-3xl xl:text-5xl font-bold text-center'>{title }</h1>
          <p className='text-xs sm:text-sm xl:text-base font-bold py-3'>{description }</p>
      </div>
  )
}

export default About