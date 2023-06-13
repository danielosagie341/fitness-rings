import React, { useState } from 'react'
import ReactPlayer from 'react-player'

const GetStartedVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false)
    
  return (
      <div className='flex flex-col justify-center items-center mt-52 mb-20 px-7'>
          <h1 className='text-3xl md:text-5xl text-center font-bold'>Get Started In Few Steps</h1>
          
          <p className='text-sm my-5 max-w-[700px] text-center'>With beam, view and monitor users activity to see what each member of the community has made payments or is consistently making payments.</p>
            
          <div className='md:h-[524px] sm:h-[300px] h-[200px] xl:w-[1193px] w-[100%] px-10 my-10 relative' >
            
            <img className='-top-32 -left-10 absolute hidden lg:block z-40' src="./images/stream-video-to-get-started.png" />
            <img className='-top-8 -left-8 absolute hidden lg:block z-40' src="./images/wink.png" />
        
            <div className='w-full h-full absolute top-0 left-0 z-10'>
             {/* when video gets ready uncomment this and remove coming soon
              <ReactPlayer
                url='https://youtu.be/h2ymJcCwS_s'
                playing={isPlaying}
                height={ '100%'}
                width={ '100%'}
                controls
              /> */}
              <h1 className='bg-black text-white text-6xl font-semibold h-full flex items-center justify-center'>Coming soon</h1>
            </div>
        
            <div className={`absolute -top-0 -left-0 z-20 h-full w-full ${isPlaying && 'z-0'}`}>
              <img className='h-full w-full' src="./images/video-substitute.png" />
            </div>
            
          </div>

            <button className='my-5 overflow-hidden' onClick={() => setIsPlaying(!isPlaying)}>
                <img src="./images/play-button.png" />
            </button>
          
            <div className={`bg-pryBlue w-fit h-fit my-5 px-4 py-5 rounded-xl relative`}>
                <p className='text-white text-sm xl:text-base'>Talk with us to learn more</p>
            </div>
        </div>
  )
}

export default GetStartedVideo