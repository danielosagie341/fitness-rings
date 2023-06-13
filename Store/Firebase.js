// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, setPersistence, onAuthStateChanged } from 'firebase/auth'
import {collection, doc, getFirestore, persistentLocalCache, } from 'firebase/firestore'
import { useContext } from "react";
import { DataContext } from "./GlobalState";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHnjJ8DFGn9rsjVpBQiwhSM7QuavVgwzQ",
  authDomain: "fitness-rings.firebaseapp.com",
  projectId: "fitness-rings",
  storageBucket: "fitness-rings.appspot.com",
  messagingSenderId: "312299960959",
  appId: "1:312299960959:web:4f8ce530db4c8643335d4a",
  measurementId: "G-RFLE3KVQJT"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)


export const register = async (email, password) => {
    const credentials = await createUserWithEmailAndPassword(auth, email, password)
    return credentials
}

export const login = async (email, password) => {
    const credentials = await signInWithEmailAndPassword(auth, email, password)
    return credentials
}


export const colRef = collection(db, 'users')


export default db