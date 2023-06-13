import React from 'react'
import styles from '../styles/Home.module.css'

const Featured = ({title1, title2, title3, description1, description2, description3}) => {
  return (
    <div>
      <div className='flex flex-col xl:flex-row 3xl:mx-auto 3xl:container '>
      
        
        <div className='bg-pink flex flex-col items-center justify-start sm:px-24 px-10 py-32 max-h-[600px]'>
          <div>
            <img src="./images/hour-glass.png" alt="hour glass" />
          </div>

          <h2 className='sm:text-6xl text-4xl font-extrabold my-12'>{title1}</h2>
          <p className=' sm:text-xl text-sm text-center'>{description1}</p>
        </div>

        <div className='bg-lightYellow flex flex-col items-center justify-start sm:px-24 px-10 py-32 max-h-[600px]'>
          <div>
            <img src="./images/dollar.png" alt="dollar" />
          </div>

          <h2 className='sm:text-6xl text-4xl font-extrabold my-12'>{title2}</h2>
          <p className=' sm:text-xl text-sm text-center'>{description2 }</p>
        </div>

        <div className='h-full bg-lightBlue flex flex-col items-center justify-start sm:px-24 px-10 py-32 max-h-[600px]'>
          <div>
            <img src="./images/coin.png" alt="coin" />
          </div>

          <h2 className='sm:text-6xl text-4xl font-extrabold my-12'>{title3}</h2>
          <p className=' sm:text-xl text-sm text-center'>{description3 }</p>
        </div>
        </div>

    </div>
  )
}

export default Featured