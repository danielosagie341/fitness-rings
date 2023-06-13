import React from 'react'
import Ceo from './Ceo'

const Founder = ({backgroundImage}) => {
  return (
      <div className='flex flex-col xl:flex-row justify-center items-center py-10 xl:py-40'>
          <Ceo backgroundImage={backgroundImage} name={ 'Leonard Adams' } position={'CEO, Founder'} />
          <Ceo backgroundImage={backgroundImage} name={ 'Inedu Joshua' } position={'COO, Founder'} />
      </div>
  )
}

export default Founder