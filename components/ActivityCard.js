import React, { useContext } from 'react'
import AnimatedCircularProgressBar from './AnimatedCircularProgressBar'
import { DataContext } from '../Store/GlobalState';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';
import db from '../Store/Firebase';

const ActivityCard = ({ activity, days, finished, time, timeCreated }) => {

  const { userData, setUserData, colorGreenBackground, colorYellowBackground, colorRedBackground} = useContext(DataContext);
  const finishedIncremented = finished
  const active = 'px-2 mx-1 bg-green-900 text-white text-xl h-10 w-10 rounded-full flex justify-center items-center pl-1'
  const disable = 'pl-1'
  
  const changeBackground = () => {
    if (activity === 'WALKING') {
      return colorGreenBackground
    } else if(activity === 'YOGA') {
      return colorYellowBackground
    } else if(activity === 'CYCLING') {
      return colorRedBackground
    } else{
      return colorGreenBackground
    }
    
  }

  const changePicture = () => {
    if (activity === 'WALKING') {
      return 'walk.png'
    } else if(activity === 'YOGA') {
      return 'yoga.png'
    } else if(activity === 'CYCLING') {
      return 'cycle.png'
    } else{
      return 'walk.png'
    }
    
  }
  
  const updateIncrement = async () => {
    if (finishedIncremented == days) {
      return
    } else {
      const userRef = collection(db, "users");

      try {
        
        const modifiedArray = userData.activityCard.map(element => {
          if (element.createdAt == timeCreated) {
            return {
              ...element,
              done: element.done + 1
            }
          }
          return element
        });
        
        await updateDoc(doc(userRef, userData.email), {
          activityCard: modifiedArray,
        });
      
      } catch (e) {
        console.error("Error adding document: ", e);
      }

      const updateUserRef = doc(db, "users", userData.email);
      const docSnap = await getDoc(updateUserRef);

      if (docSnap.exists()) {
        setUserData(docSnap.data())
        console.log("Document data:", docSnap.data());
            
      } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
      }
    }
}

  return (
    <div className={`${changeBackground()}  shadow-progressBar2 bg-opacity-20 px-10 py-2 rounded-3xl inline-block mx-7`}>
      <img className='h-10 w-10 mb-7' src={`./images/${changePicture()}`} alt="walk icon" />
      
      <div className='py-5'><AnimatedCircularProgressBar progress={(finished / days) * 100} /></div>

      <small className='flex'>Day: <p className='px-2'> {finishedIncremented} 0f { days}</p></small>
      <small className='flex'>Time: <p className='px-2'> {time} min</p></small>
      <small className='flex items-center'>Done Today: <button onClick={() => { updateIncrement() }} className={finishedIncremented == days ? disable : active}> { finishedIncremented == days ? 'finished' : '+' }</button></small>

      <p className='py-3'>{ activity}</p>

    </div>
  )
}

export default ActivityCard