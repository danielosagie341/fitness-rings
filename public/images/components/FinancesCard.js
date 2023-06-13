import React from 'react'

const FinancesCard = () => {
  return (
      <div className='3xl:mx-auto 3xl:container'>
        <div className='flex xl:flex-row flex-col px-5 sm:px-20'>
            <div className='flex flex-col justify-center items-center'>
              <h2 className='font-bold text-3xl mb-3'>Keep track of your finances</h2>
              <p className='text-sm'>Beam provides features that allows communities keep track of their activity logs, assign roles and permission</p>
            </div>
            
            <img className='xl:mx-5 my-10 xl:my-0' src="./images/keep-track-of-finances.png" />
            
            <div className='flex flex-col justify-center items-center'>
              <div className='my-5'>
                  <p className='flex items-center my-3 font-bold text-sm xl:text-base'>
                    <img className='mr-3 xl:mr-7' src="./images/check.png" />  
                    Grow your reach as a vendor
                  </p>

                  <p className='text-sm ml-5 xl:ml-20 text-lightGray'>
                   Exposure is a business ingredient. You have a platform where your business exposure can go farther than legs can walk.
                  </p>
              </div>
              
              <div className='my-5'>
                  <p className='flex items-center my-3 font-bold text-sm xl:text-base'>
                    <img className='mr-3 xl:mr-7' src="./images/check.png" />
                    Keep track of sales
                  </p>

                  <p className='text-sm ml-5 xl:ml-20 text-lightGray'>
                    Monitor your sales daily, monthly and yearly with few finger taps. Let the days you use pen and paper be gone!
                  </p>
              </div>

              <div className='my-5'>
                  <p className='flex items-center my-3 font-bold text-sm xl:text-base'>
                    <img className='mr-3 xl:mr-7' src="./images/check.png" />
                    Connect to your users
                  </p>

                  <p className='text-sm ml-5 xl:ml-20 text-lightGray'>
                   An easy way to stay in contact with your customers without breaking your back.
                  </p>
              </div>

            </div>
      </div>
       {/* <img className='translate-x-40 w-[300px]' src="./images/hand-drawn arrow.png" /> */}
      </div>
  )
}

export default FinancesCard