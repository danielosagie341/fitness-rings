import React from 'react'
import Link from 'next/link'

const GetAppButton = ({hasIcon}) => {
  return (
    <div>
      <Link href='https://play.google.com/store/apps/details?id=com.beam.ng'>
        <a>
          <div className="bg-pryBlue w-fit h-fit px-4 py-3 rounded-xl relative cursor-pointer">
            <img src="./images/get-beam-app.svg" alt="get-app" />
            {
              hasIcon && 
              <img src="./images/bling.svg" className='absolute 2xl:block xl:hidden -right-7 -bottom-7' alt="bling" />
            }
          </div>
        </a>
      </Link>
    </div>
  )
}

export default GetAppButton