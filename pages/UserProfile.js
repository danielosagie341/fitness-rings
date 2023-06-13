import React, { useContext, useState } from 'react'
import Link from 'next/link'
import { DataContext } from '../Store/GlobalState';
import db from '../Store/Firebase';
import { addDoc, setDoc, collection, doc, updateDoc, getDoc } from 'firebase/firestore';

const UserProfile = () => {
    
    const { userData, setUserData } = useContext(DataContext);
    const [displayForm, setDisplayForm] = useState(false)
    const [selectedOption, setSelectedOption] = useState('');
    const [name, SetName] = useState("");
    const [surname, SetSurname] = useState("");
    const [dob, setDob] = useState('')
    const [weight, setWeight] = useState('')
    const [height, setHeight] = useState('')

    const submitForm = async (e) => {
        e.preventDefault()
        console.log(userData);

        const userRef = collection(db, "users");

         try {
            const docRef = await updateDoc(doc (userRef, userData.email), {
              Name: name,
            surname: surname,
            dob: dob,
            sex: selectedOption,
            weight: weight,
            height: height,    
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
          console.log()

        setDisplayForm(false)
    }

  const displayIcon = userData.surname ? userData.surname.slice(0, 1) : userData.surname

  return (
    <div className='p-6 min-h-[90vh] relative'>
    <div className='flex justify-between items-center pb-10'>
        <p></p>

        <h1 className='font-bold'>Account </h1>
        
        <Link href="/">
            <p className='text-green-600 font-bold'> Done</p>
        </Link>
    </div>
        
    <div className='shadow-3xl flex justify-between items-center p-3 rounded-3xl'>
        {
          displayIcon != '' ?
            <p className='rounded-full object-contain bg-fuchsia-900 bg-opacity-50 h-14 w-14 mr-3 flex justify-center items-center text-white font-semibold text-[40px]'> <p className='-translate-y-2'> {displayIcon} </p> </p>
          :
          <img className='rounded-full object-contain h-14 w-14 mr-3' src="./images/User.png" alt="profile photo" />
        }
        
        <div>
                  <p>{userData.surname} {' '} { userData.Name}</p>
                <small>{ userData.email}</small>
        </div>

        <button onClick={ () => setDisplayForm(true)}>
            <img className='h-5 w-5 rounded-full bg-black' src="./images/next.png" alt="next" />  
        </button>
    </div>
        
        <div className='py-10'>
            <h1 className='font-extrabold text-3xl text-center'>Personalize Fitness and Health</h1>
            <p className='py-5 text-center'>This information ensures Fitness and Health data are as accurate as possible</p>

            <div className='shadow-3xl px-4 py-2 rounded-2xl'>
                <div className='flex justify-between items-center border-b-[1px] py-2'>
                    <p>Date of Birth</p>
                    <p className='opacity-50'>{userData.dob}</p>
                </div>
                
                <div className='flex justify-between items-center border-b-[1px] py-2'>
                    <p>Sex</p>
                      <p className='opacity-50'>{ userData.sex}</p>
                </div>
                
                <div className='flex justify-between items-center border-b-[1px] py-2'>
                    <p>Height</p>
                    <p className='opacity-50'>{userData.height}</p>
                </div>
                
                <div className='flex justify-between items-center border-b-[1px] py-2'>
                    <p>Weight</p>
                    <p className='opacity-50'>{userData.weight}</p>
                </div>
            </div>
        </div>
        
        {
            displayForm &&
            <div className="absolute top-0 left-0 h-full w-full flex justify-center items-center z-50 px-7">
                <div className='h-full w-full absolute bg-black backdrop-blur-sm bg-opacity-50 -z-50'></div>
                    <form onSubmit={(e) => {submitForm(e)}} className='flex rounded-3xl shadow-3xl bg-white border-2 border-white flex-col items-center justify-center text-center p-7'>
                        <div className='flex justify-between items-start w-full px-4'>
                            <p></p>
                                <div>
                                    <p className='font-bold'>Please Fill your Details</p>
                            <p className='font-bold py-3'>Please the form completely <br /> each time before submitting</p>
                                </div>
                            <p className='text-white bg-black rounded-full w-7 h-7 flex justify-center items-center' onClick={ () => setDisplayForm(false)}>X</p>      
                        </div>

                   
                        <p className='mt-5'>Surname: </p>
                        <input type="text" placeholder='Please add a surname' className='border-b-2 text-center' onChange={(e) => {SetSurname(e.target.value)}} required/>
                    
                    
                   
                        <p className='mt-5'>Name: </p>
                        <input type="text" placeholder='Please add a name' className='border-b-2 text-center' onChange={(e) => {SetName(e.target.value)}} required/>

                   
                        <p className='mt-5'>Date of Birth: </p>
                        <input type="date"  onChange={(e) => {setDob(e.target.value)}} required/>
                    

                   
                        <p className='mt-5'>Sex </p>
                        <select value="Select an option" onChange={(e) => setSelectedOption(e.target.value)} required>
                            <option value="Select an option">Select an option</option>
                            <option value="MALE">MALE</option>
                            <option value="FEMALE">FEMALE</option>
                            <option value="OTHERS">OTHERS</option>
                        </select>
                    

                   
                        <p className='mt-5'>Weight: </p>
                        <input type="number" placeholder="kg" className='border-b-2 border-black text-center' onChange={(e) => {setWeight(e.target.value + 'kg')}} required/>
                    

                   
                        <p className='mt-5'> Height: </p> 
                        <input type="number" placeholder="cm"  className='border-b-2 border-black text-center' onChange={(e) => {setHeight(e.target.value + 'cm')}}required/>
                    
                    
                    <button className='bg-black text-white px-5 py-2 rounded-xl mt-5' type="submit" >Submit</button>
                </form>
            </div>
        }

    </div>
  )
}

export default UserProfile