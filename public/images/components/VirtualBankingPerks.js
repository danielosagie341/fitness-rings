import React from 'react'
import {motion} from 'framer-motion'
import StayConnected from './StayConnected'
import Hero from './Hero'
import GetAppButton from './GetAppButton'
import LiveInTheFuture from './LiveInTheFuture'

const VirtualBankingPerks = () => {

  const slideInY = {
    offscreen: { y: 50, opacity: 0 },
    onscreen: { y: 0, opacity: 1 ,
    transition: {
      type: 'spring',
      bounce: 0.4,
      duration: 2
      }
    },
  }

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
    <motion.div className='flex flex-col justify-center items-center px-3 py-20 3xl:mx-auto 3xl:container'>
      <h2 className='sm:text-6xl text-center text-4xl font-extrabold my-12 px-10'>Best Virtual Banking Perks</h2>
          
      <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{amount:0.3}}
        variants={slideInY}
        className='w-full 3xl:px-auto 2xl:px-[10%] xl:px-[2%] md:px-[5%] px-3 '
      >
        <Hero
          image2={'./images/hand-held-phone1.png'}
          hidden={ 'hidden'}
          displayImg1={'hidden'}
          title={'make seamless transfers in minutes'}
          description={'Send your money to its right destination with no sweat involved and with speed.'}
          background={'bg-yellowBackground'}
        />
      </motion.div>
      
      <motion.div
        initial={'offscreen'}
        whileInView={'onscreen'}
        viewport={{amount:0.3}}
        variants={slideInX}
        className='flex flex-col md:flex-row -mt-10 w-full justify-center items-center'
      >
        <StayConnected
          backgroundColor={'bg-pink bg-opacity-30 '}
          title1={'Stay '}
          title2={'Connected '}
          title3={'To Your '}
          title4={'World '}
          color2={'opacity-50'}
          color4={'text-pink'}
          description={'Never lose touch with your folks by keeping your device recharged and subscribed without delay and stress.'}
          image={'./images/girl-making-call.png'}
        />

        <LiveInTheFuture
          backgroundColor={'bg-lightBlue bg-opacity-30 '}
          title1={'Live In The Future, '}
          title2={'Avoid Sapa'}
          color2={'text-lightBlue'}
          description={"Sapa no send anybody papa. That's why you have to burn the sapa bridge when you still can. Only way? Plan your future!"}
          image={'./images/live-in-the-future.png'}
        />
      </motion.div>
      
      <div className=" bg-pryBlue rounded-xl px-3">
        <GetAppButton />
      </div>
    </motion.div>
  )
}

export default VirtualBankingPerks