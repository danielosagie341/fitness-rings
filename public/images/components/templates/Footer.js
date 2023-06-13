import React from 'react'

const Footer = () => {
  return (
    <div className='lg:px-80 px-5 pt-5 lg:pt-24 pb-10 lg:pb-44 font-semibold'>
      {/* <div className='mb-32'>
        <form>
          <input type="email" name="" id="" className='border-bgWhite border-solid border-4 py-5 pl-32 w-9/12 rounded-xl mr-5 text-lg' placeholder='Stay in touch, know our next smart move...' />
          <button type="submit" className='bg-pryBlue text-white px-9 py-5 text-lg rounded-lg' >Subscribe</button>
        </form>
  </div> */ }

      <div className='mb-20 flex flex-col items-center lg:items-start'>
        <p>CONNECT</p>
        <div className='flex'>
          <img src="./images/instagram-logo.svg" className='pr-2' alt="instagram logo" />
          <img src="./images/tiktok-logo.svg" className='px-2' alt="tiktok logo" />
          <img src="./images/twitter-logo.svg" className='px-2' alt="twitter logo" />
          <img src="./images/youtube-logo.svg" className='px-2' alt="youtube logo" />
        </div>
      </div>

      <div className='flex flex-col-reverse lg:flex-row justify-between items-center'>
        <p className='text-xs lg:text-base my-3 lg:my-0'>Copyright @ 2022 Beam</p>
        <p className='my-3 lg:my-0'>privacy policy</p>
      </div>
    </div>
  )
}

export default Footer
