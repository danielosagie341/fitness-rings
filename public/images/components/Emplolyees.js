import React from 'react'

const Emplolyees = ({backgroundImage, name, position}) => {
  return (
      <div>
         <div className='flex flex-col justify-center items-center px-10 py-10 w-fit'>
              <div className={`${backgroundImage} h-[250px] lg:h-[350px] w-[200px] lg:w-[300px] bg-contain bg-no-repeat`}>
              </div>

              <div className='pt-3 flex flex-col items-center'>
                  <h1 className='font-bold text-2xl lg:text-4xl'>{ name}</h1>
                  <p className='font-semibold' >{ position}</p>
              </div>
          </div>
      </div>
  )
}

export default Emplolyees