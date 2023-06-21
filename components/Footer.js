import React from 'react'
import Link from 'next/link'

const Footer = () => {
    
  return (
    <div className='flex justify-center'>
      <div className='flex justify-between items-center m-6 bg-fuchsia-900 bg-opacity-10 px-14 rounded-[50px] lg:min-w-[700px]'>
          <Link href="/">
            <img className='h-7 w-7' src="./images/Home.png" alt="" />
          </Link>
          
          <div className=''>
            <div className='p-5 bg-white rounded-full -translate-y-10'>
                <Link href="/Activity">
                    <img className='h-10 w-10' src="./images/Plus.png" alt="" />
                </Link>
            </div>
          </div>
          
          <Link href="/UserProfile">
            <img className='h-7 w-7' src="./images/User.png" alt="" />
          </Link>
      </div>
    </div>
  )
}

export default Footer