import React, { useContext } from 'react'
import ActivityCard from './ActivityCard'
import { DataContext } from '../Store/GlobalState';
import AnimatedCircularProgressBar from './AnimatedCircularProgressBar';

const YourActivities = () => {

      const { userData} = useContext(DataContext);

  return (
    <div className='p-6'>
      <h1 className='py-10'>YOUR ACTIVITIES</h1>
        
      <div className='flex overflow-x-scroll no-scrollbar h-full'>

        {userData.activityCard.map((activity) => (
          <div key={activity.createdAt}>
            <ActivityCard activity={activity.activity} days={activity.days} finished={activity.done} time={activity.timeOfWork} timeCreated={activity.createdAt} />
          </div>
        ))}
          
        <div className={`bg-fuchsia-900  shadow-progressBar2 bg-opacity-20 px-10 py-2 rounded-3xl inline-block mx-7`}>
          <img className='h-10 w-10 mb-7' src={`./images/walk.png`} alt="walk icon" />
          
          <div className='py-5'><AnimatedCircularProgressBar progress={50} /></div>

          <small className='flex'>Day: <p className='px-2'> start today</p></small>
          <small className='flex'>Time: <p className='px-2'> minutes</p></small>
          <small className='flex items-center'>Done Today: <button className='pl-1'> finished </button></small>

          <p className='py-3'>Choose Activity</p>

        </div>

      </div>
    </div>
  )
}

export default YourActivities