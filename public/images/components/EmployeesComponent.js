import React from 'react'
import Emplolyees from './Emplolyees'

const EmployeesComponent = () => {
  return (
      <div className='flex flex-wrap xl:px-40 py-20 justify-center items-center'>
          <Emplolyees backgroundImage={'bg-employee1'} name={"Leonard Adams"} position={'CEO, Founder'} />
          <Emplolyees backgroundImage={'bg-employee1'} name={"Leonard Adams"} position={'CEO, Founder'} />
          <Emplolyees backgroundImage={'bg-employee2'} name={"Leonard Adams"} position={'CEO, Founder'} />
          <Emplolyees backgroundImage={'bg-employee1'} name={"Leonard Adams"} position={'CEO, Founder'} />
          <Emplolyees backgroundImage={'bg-employee2'} name={"Leonard Adams"} position={'CEO, Founder'} />
          <Emplolyees backgroundImage={'bg-employee1'} name={"Leonard Adams"} position={'CEO, Founder'} />
      </div>
  )
}

export default EmployeesComponent