import React from 'react'
import styles from '../styles/Home.module.css'

const HeroReverse = ({image, image2, titleLine1, titleLine2, description, coming, displayImg1, displayImg2, background, hidden}) => {
  return (
    <div>
      <div className={`flex flex-col xl:flex-row-reverse p-20 3xl:px-32 sm:px-28 px-5 justify-center items-center rounded-3xl ${background}`}>
        <div className=' flex justify-center items-center xl:ml-10 mb-14' >
          <div className='sm:max-w-[600px] min-w-[240px] text-left flex flex-col justify-center items-start'>
            <h2 className={styles.text}>
              <span className='sm:text-[50px] text-[35px]' >{titleLine1} <br /> {titleLine2 }</span>
            </h2>

            <p className='sm:w-[500px] lg:text-xl sm:text-lg text-sm pb-5'>{description}</p>

            <p className='lg:text-xl sm:text-lg text-sm font-semibold pb-5 relative'>
              {coming}
              <img src="./images/curved-arrow.svg" className='absolute 2xl:block xl:hidden -right-28 top-0' alt="curved-arrow" /> 
            </p>

            <div className={`bg-pryBlue w-fit h-fit px-4 py-5 rounded-xl relative ${hidden}`}>
                <p className='text-white'>Talk with us to learn more</p>
            </div>
          </div>
        </div>
        
        <div className='flex items-center h-full'>
          <img src={image} className={`w-[652px] ${displayImg1}`} alt="Girl 1" />
          <img src={image2} className={`${displayImg2}`} alt="Girl 1" />
        </div>
      </div>
    </div>  
  )
}

export default HeroReverse