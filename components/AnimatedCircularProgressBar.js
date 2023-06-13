import React, { useContext } from 'react'
import '../styles/Home.module.css'
import { DataContext } from '../Store/GlobalState';

const AnimatedCircularProgressBar = ({ progress }) => {

      const { userData, colorGreen, colorYellow, colorRed } = useContext(DataContext);
    
    const progressToString = progress.toString();
    const sliceProgressToString = progressToString.slice(0, 4)

    

    const changeColor = () => {
        if (userData.activityCard.activity === 'WALKING') {
        return colorGreen
        } else if(userData.activityCard.activity == 'YOGA') {
        return colorYellow
        } else if(userData.activityCard.activity === 'CYCLING') {
        return colorRed
        } else{
        return colorGreen
        }
        
    }

  return (
      
    <div className='rounded-full h-32 w-32 flex justify-center items-center shadow-progressBar stroke-rose-700 relative'>
              
            
        <div className=' absolute -top-4 -left-4 animate-[spin_2s_linear_forwards] '>  
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">
                <defs>
                    <linearGradient id="GradientColor">
                    <stop offset="0%" stopColor="#e91e63" />
                    <stop offset="100%" stopColor="#673ab7" />
                    </linearGradient>
                </defs>
                <circle className={`fill-[none] stroke-[${changeColor()}] stroke-[19px]`} strokeDashoffset={472-472*(progress/100)} strokeDasharray={427} cx="80" cy="80" r="53" strokeLinecap="round" />
            </svg>
                
        </div>
          
        <div className='rounded-full h-20 w-20 bg-white shadow-progressBar2 flex justify-center items-center font-semibold color-[#555]'>
            <div>{sliceProgressToString }%</div>
        </div>
    </div>
      
          
  )
}

export default AnimatedCircularProgressBar