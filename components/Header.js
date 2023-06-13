import React, { useContext } from 'react'
import { DataContext } from '../Store/GlobalState';
import { auth } from '@/Store/Firebase';

const Header = () => {
  
    const { userData, setLoggedIn } = useContext(DataContext);

  let date = new Date()
  date = '0' + (date.getMonth() + 1) + ' ' + date.getDate() + ',' + ' ' + date.getFullYear()

  const displayIcon = userData.surname ? userData.surname.slice(0, 1) : userData.surname

  const handleLogout = async () => {
    try {

      // Sign out the user from Firebase client-side
      await auth.signOut();
    } catch (error) {
      console.error('Logout error:', error);
    }

    setLoggedIn(false)
  };

  return (
    <div className='flex flex-col items-center justify-between p-6'>
      {
        !userData.Name && <p className='text-xs text-center text-red-500'>Please complete your registration in the user page to personalize your account</p>
      }
      <div className='flex items-center justify-between w-full'>
        <div className='flex items-center w-full'>
          {
            displayIcon != '' ?
              <p className='rounded-full object-contain bg-fuchsia-900 bg-opacity-50 h-14 w-14 mr-3 flex justify-center items-center text-white font-semibold text-[40px]'> <small className='-translate-y-2'> {displayIcon} </small> </p>
            :
              <img className='rounded-full object-contain h-12 w-12 mr-3 shadow-progressBar p-1' src="./images/User.png" alt="profile photo" />
          }
        
          <div>
            <h1 className='font-bold'>HI {userData.Name ? userData.Name : userData.email},</h1>
            <small className='text-xs opacity-50'>{date}</small>
          </div>
          
        </div>
          
        <button className='bg-red-500 px-3 py-2 rounded-2xl text-sm text-white font-bold w-[110px]' onClick={() => handleLogout() }>LOG OUT</button>
      </div>
    </div>
  )
}

export default Header