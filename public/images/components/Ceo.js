import React from 'react'

const Ceo = ({backgroundImage, name, position}) => {
  return (
      <div>
        <div className='flex flex-col justify-center items-center my-5 mx-5 xl:mx-20'>
              <div>
                    <img src="./images/founder-frame.png" className={`${backgroundImage} w-[300px] lg:w-[400px] bg-cover`} alt="founder frame" />
              </div>

              <div className='pt-3 flex flex-col items-center'>
                  <h1 className='font-bold text-2xl xl:text-4xl'>{ name}</h1>
                  <p className='font-semibold' >{ position}</p>
              </div>
          </div>
      </div>
  )
}

export default Ceo