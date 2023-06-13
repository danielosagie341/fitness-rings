import React from 'react'

const LiveInTheFuture = ({backgroundColor, image, title1, title2, title3, title4, color1, color2, color3, color4, description}) => {
  return (
      <div className={`${backgroundColor} rounded-3xl py-5 px-10 md:ml-10 mb-10 pt-10 md:-translate-y-5`}>
          <div className='xl:w-[450px] xl:max-w-[450px] max-w-[300px]'>
                <h2 className='xl:text-[45px] text-[30px] font-extrabold'>
                    <span className={`${color1}`}>{title1}</span>
                    <span className={`${color2}`}>{title2}</span>
                    <span className={`${color3}`}>{title3}</span>
                    <span className={`${color4}`}>{title4}</span>
                </h2>

              <p className='xl:text-base py-5 text-sm'>{ description}</p>
          </div>

          <img className='xl:h-[230px] h-[120px]' src={image} />
      </div>
  )
}

export default LiveInTheFuture