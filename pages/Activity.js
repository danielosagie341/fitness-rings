import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import { DataContext } from '../Store/GlobalState';
import db from '../Store/Firebase';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';

const Activity = () => {

    const { userData, setUserData } = useContext(DataContext);

    const [selectedActivity, setSelectedActivity] = useState('')
    const [days, setDays] = useState('')
    const [minutes, setMinutes] = useState('')
    const [newActivity, setNewActivity] = useState('')

    const submitActivityForm = async (e) => {
        e.preventDefault()
        console.log(userData);

        const userRef = collection(db, "users");

        try {
            const docRef = await updateDoc(doc(userRef, userData.email), {
                activityCard: [
                    {
                    createdAt: new Date(),
                    activity: selectedActivity,
                    days: days,
                    done: 0,
                    timeOfWork: minutes,
                },
                    ...userData.activityCard
               ]   
                });
             
            console.log("Done");
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

        e.target.reset()
        setNewActivity('New activity has been created.');
    }

  return (
      <div>
          <Header />
          <div className='h-[75vh] flex justify-center items-center'>
               <div className=" flex justify-center items-center z-50 px-7">
                    <form onSubmit={(e) => {submitActivityForm(e)}} className='flex rounded-3xl shadow-3xl bg-white border-2 border-white flex-col items-center justify-center text-center p-7'>
                        <div className='flex justify-between items-start w-full px-4'>
                            <p></p>
                                <div>
                                    <p className='font-bold'>ADD A NEW ACTIVITY </p>
                            <p className='font-bold py-3'>Please the form completely <br /> each time before submitting</p>
                                </div>     
                        </div>
                        
            
                        <p className='mt-5'>activity type </p>
                        <select value="Select an option" onChange={(e) => setSelectedActivity(e.target.value)} >
                            <option value="Select an option">Select an option</option>
                            <option value="WALKING">WALKING</option>
                            <option value="YOGA">YOGA</option>
                            <option value="CYCLING">CYCLING</option>
                        </select>
                   
                        <p className='mt-5'>How many days do you <br /> want to do this exercise </p>
                        <input type="number" placeholder="You can't change this later" className='border-b-2 text-center' onChange={(e) => {setDays(e.target.value)}} required />
                    
                    
                   
                        <p className='mt-5'>How may minutes do you <br /> want to do this exercise </p>
                        <input type="number" placeholder='Please add a name' className='border-b-2 text-center' onChange={(e) => {setMinutes(e.target.value)}} required/>

                    
                    
                      <button className='bg-black text-white px-5 py-2 rounded-xl mt-5' type="submit" >Submit</button>
                      <p className='text-green-500'>{ newActivity }</p>
                </form>
            </div>
          </div>
      </div>
  )
}

export default Activity