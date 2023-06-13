import React, {useEffect, useState} from 'react'
import {motion} from 'framer-motion'
import styles from '../styles/Home.module.css'
import DynamicButton from './DynamicButton'

const ThreeCards = ({ image, image2, titleLine1, titleLine2, description, coming, background, hidden }) => {
    const [isActive, setIsActive] = useState(false)
    
   console.log(isActive);

    const active = () => {
      setIsActive(true)
      console.log(isActive);
    }

  return (
    <div>
      <div className={`flex flex-col xl:flex-row-reverse p-20 3xl:px-32 sm:px-28 px-5 justify-center items-center rounded-3xl ${background}`}>
        <div className=' flex justify-center items-center xl:ml-20 mb-14' >
          <div className='sm:max-w-[600px] min-w-[240px] text-left flex flex-col justify-center items-start'>
            <h2 className={styles.text}>
              <span className='sm:text-[65px] text-[40px]' >{titleLine1} <br /> {titleLine2 }</span>
            </h2>

            <div className=' py-7'>
              <p className='sm:w-[500px] lg:text-xl sm:text-lg text-sm'>{description}</p>

            <p className='lg:text-xl sm:text-lg text-sm font-semibold relative'>
              {coming}
            </p>
            </div>

            <DynamicButton />
          </div>
        </div>
        
        <motion.div onMouseEnter={active} onMouseLeave={() => setIsActive(false)}  className={`hidden md:block xl:w-[500px] w-[300px] h-96 relative z-50 my-16`}>
          <motion.img
            src='./images/blue-card.png'
            animate={{  rotate: isActive ? 30 : 0 , x: isActive ? 120 : 0, y: isActive ? 30 : 0, originX: 1, originY: 1 }}          
            className='absolute top-0 left-0'
            alt="card"
          />
          <img src='./images/yellow-card.png' className='absolute top-0 left-0' alt="card" />
          <motion.img
            src='./images/pink-card.png'
            animate={{  rotate: isActive ? -30 : 0 , x: isActive ? -120 : 0, y: isActive ? 60 : 0, originY: 1 }}      
            className='absolute top-0 left-0'
            alt="card"
          />
        </motion.div>
              
        <div className='flex items-center h-full md:hidden -mx-7'>
          <img src='./images/three-cards.png' className={`w-[900px]`} />
        </div>
      </div>
    </div>  
  )
}

export default ThreeCards