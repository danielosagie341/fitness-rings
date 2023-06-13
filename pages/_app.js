import React, { useState, useContext, useEffect } from 'react'
import Layout from '../components/Layout'
import '../styles/globals.css'
import Footer from '../components/Footer'
import { DataContext } from '../Store/GlobalState'
import Login from '../components/Login'
import { onAuthStateChanged } from 'firebase/auth'
import db, { auth, colRef } from '../Store/Firebase'
import { collection, doc, getDoc } from 'firebase/firestore'

function MyApp({ Component, pageProps }) {


  const [loggedIn, setLoggedIn] = useState(false)
  const [userData, setUserData] = useState('not available')
  const [currentUser, setCurrentUser] = useState('')
  const [colorGreen, setColorGreen] = useState('green')
  const [colorGreenBackground, setColorGreenBackground] = useState('bg-green-400')
  const [colorRed, setColorRed] = useState('red')
  const [colorRedBackground, setColorRedBackground] = useState('bg-red-400')
  const [colorYellow, setColorYellow] = useState('yellow')
  const [colorYellowBackground, setColorYellowBackground] = useState('bg-yellow-400')
  const [doneForTheDay, setDoneForTheDay] = useState(false)


  useEffect(() => {

    const unsubscribe = async (user) => {
        if (user) {
        
          const userRef = doc(db, "users", user.email);
          const docSnap = await getDoc(userRef);

          if (docSnap.exists()) {
            setUserData(docSnap.data())
            console.log("Document data:", docSnap.data());
            
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
          setLoggedIn(true)
          console.log()
        }
        else {
          console.log('no user found');
        }
      }

    // Cleanup the listener when component unmounts
    return () => {
      unsubscribe();
    };
  }, []);
  

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      const logBack = async (e) => {
        if (user) {
        
          const userRef = doc(db, "users", user.email);
          const docSnap = await getDoc(userRef);

          if (docSnap.exists()) {
            setUserData(docSnap.data())
            console.log("Document data:", docSnap.data());
            
          } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
          }
          setLoggedIn(true)
          console.log()
        }
        else {
          console.log('no user found');
        }
      }

      logBack()
    })
  }, [])
  
  const initialState = {
    userData,
    setUserData,
    loggedIn,
    setLoggedIn,
    currentUser,
    setCurrentUser,
    colorGreen,
    colorGreenBackground,
    colorYellow,
    colorYellowBackground,
    colorRed,
    colorRedBackground,
    doneForTheDay,
    setDoneForTheDay
  }

  return (
    <Layout>
      <DataContext.Provider value={initialState}>
        {
          !loggedIn ?
            <Login />
          :
            <>
              <Component {...pageProps} />
              <Footer />
            </>
        }
      </DataContext.Provider>
    </Layout>
  )
}

export default MyApp
