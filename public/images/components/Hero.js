import React from 'react'
import {motion} from 'framer-motion'
import Typewriter from 'typewriter-effect'
import styles from '../styles/Home.module.css'
import GetAppButton from './GetAppButton'

const Hero = ({ image, image2, title, hidden, titleLine1, titleLine2, titleLine3, description, coming, displayImg1, displayImg2, background, paddingToBreak }) => {
  
  const slideInX = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: 0, opacity: 1,
     transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 3
      }
    }
  }

  return (
    <div>
      <div className={`flex flex-col xl:flex-row pt-10 mb-20 3xl:px-32 px-10 justify-center items-center 3xl:mx-auto 3xl:container rounded-3xl overflow-hidden ${background}`}>
        <div className=' flex justify-center items-center mb-14' >
          <div className='sm:max-w-[630px] min-w-[240px] text-left flex flex-col justify-center items-start'>
            <h2 className={` ${styles.text}`}>
              <span className={`xl:text-[85px] sm:text-[70px] text-[41px] ${styles.text} ${paddingToBreak}`}>{title}</span>
               
              <span className={`xl:text-[85px] sm:text-[70px] text-[41px] ${styles.inline} ${hidden}`}>
                  <Typewriter
                  options={{
                    autoStart: true,
                    loop: true,
                    delay: 300,
                    strings: [
                      titleLine1,
                      titleLine2,
                      titleLine3,
                    ],
                  }}
                />
              </span>
            </h2>

            <div className=' py-7'>
              <p className='xl:w-[500px] lg:text-xl sm:text-lg text-sm'>{description}</p>

              <p className='lg:text-xl sm:text-lg text-sm font-bold relative my-3'>
                {coming}
                <img src="./images/curved-arrow.svg" className='absolute 2xl:block hidden xl:block -right-0 top-0' alt="curved-arrow" /> 
              </p>
            </div>

           <GetAppButton hasIcon={true} />
          </div>
        </div>
        
        <motion.div
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{ once: true ,amount:0.3}}
          variants={slideInX}
          className={`flex items-center w-[400px] ${displayImg1 === 'hidden' ? 'md:w-0' : 'md:w-[625px]'}`}
        >
          <img src={image} className={`${displayImg1}`} alt="Girl 1" />
        </motion.div>

        <motion.img
          initial={'offscreen'}
          whileInView={'onscreen'}
          viewport={{once: true, amount:0.3}}
          variants={slideInX}
          src={image2} className={`${displayImg2}`} alt="Girl 1"
        />
      </div>
    </div>  
  )
}

export default Hero