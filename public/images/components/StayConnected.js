import React from 'react'

const StayConnected = ({backgroundColor, image, title1, title2, title3, title4, color1, color2, color3, color4, description}) => {
  return (
      <div className={`${backgroundColor} rounded-3xl p-5 xl:m-5 my-5 pt-10`}>
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

export default StayConnected