import React from 'react'
import CoreValue from './CoreValue'

const CoreValueComponent = () => {
  return (
      <div className='py-20'>
          <div className='pb-10'>
            <h1 className='text-2xl lg:text-5xl font-bold text-center'>Our Core Values</h1>
          </div>
          
          <div className='flex flex-wrap justify-center item-center'>
            <CoreValue backgroundColor={'bg-pink'} title={'Core value 1'} description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolor eum atque amet ullam quae, voluptatum, nobis minus deserunt vitae ea. Nemo, veniam exercitationem cumque voluptatibus qui quaerat enim amet.'} />
            <CoreValue backgroundColor={'bg-pryGreen'} title={'Core value 2'} description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolor eum atque amet ullam quae, voluptatum, nobis minus deserunt vitae ea. Nemo, veniam exercitationem cumque voluptatibus qui quaerat enim amet.'} />
            <CoreValue backgroundColor={'bg-lightBlue'} title={'Core value 3'} description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolor eum atque amet ullam quae, voluptatum, nobis minus deserunt vitae ea. Nemo, veniam exercitationem cumque voluptatibus qui quaerat enim amet.'} />
            <CoreValue backgroundColor={'bg-orange'} title={'Core value 4'} description={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque dolor eum atque amet ullam quae, voluptatum, nobis minus deserunt vitae ea. Nemo, veniam exercitationem cumque voluptatibus qui quaerat enim amet.'} />
          </div>
      </div>
  )
}

export default CoreValueComponent