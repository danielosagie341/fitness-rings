  import React, {useContext, useState, useEffect} from 'react'
import Link from 'next/link'
import { DataContext } from '../../Store/GlobalState'
import SecondaryHeader from '../SecondaryHeader'

function Header() {
  const { state, dispatch } = useContext(DataContext)
  const { userState } = state 

  const active = 'px-14 py-2 underline text-sm border-b-pryBlue border-solid border-b-2 cursor-pointer'
  const normal = 'px-14 py-2 underline text-sm cursor-pointer'

  const displayVendor = () => {
    dispatch({ type: 'USERSTATE', payload: 'vendor' })
  }

  const displayPersonal= () => {
    dispatch({ type: 'USERSTATE', payload: 'personal' })
  }
  
  return <div className='font-semibold w-full  '>
    <nav className='bg-pryGreen h-14  '>
      <ul className='flex justify-center place-items-end w-full h-full 3xl:container 3xl:mx-auto '>
        <li onClick={() => displayPersonal()} className={userState === 'personal' ? active : normal} >
          <Link href='/'>
            <a>
              Personal
            </a>
          </Link>
        </li>
        <li onClick={() => displayVendor()} className={userState !== 'personal' ? active : normal} >
          <Link href='/'>
            <a>
              Vendor
            </a>
          </Link>
        </li>
      </ul>
    </nav>

   <SecondaryHeader />
  </div>
}

export default Header
