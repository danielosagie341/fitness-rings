import React, { useContext, useEffect, useState } from "react";
import {addDoc, collection, doc, getDoc, serverTimestamp, setDoc} from 'firebase/firestore'
import db, { register, login, colRef } from "../Store/Firebase";
import { DataContext } from "../Store/GlobalState";

function Login() {

    const { userData, setUserData, loggedIn, setLoggedIn, currentUser, setCurrentUser, activityContent } = useContext(DataContext);
    const [loginErrMessage, setLoginErrMessage] = useState('')
    const [registerErrMessage, setRegisterErrMessage] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const [loading, setLoading] = useState(false)
    
    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        setLoginErrMessage('')

        login(email, password).then((res) => {
           console.log(res)
            setCurrentUser(res.user)
            setLoggedIn(true)

        }).catch(err => {
            setLoginErrMessage('User not registered or incorrect password');
        })

        const userRef = doc(db, "users", email);
        const docSnap = await getDoc(userRef);

        setLoading(false)

        if (docSnap.exists()) {
            setUserData(docSnap.data())
        } else {
        // docSnap.data() will be undefined in this case
        console.log(loginErrMessage);
        }
    } 

    const handleRegister = async (e) => {
        e.preventDefault();
        setLoading(true)
        setRegisterErrMessage('')

        register(email, password).then((res) => {
            console.log(res);
            const newUser = {
                profileImage: 'https://source.unsplash.com/1600x900/?cartoon',
                email: res.user.email,
                phoneNumber: '',
                createdAt: serverTimestamp(),
                Name: '',
                surname: '',
                dob: '',
                sex: '',
                weight: '',
                height: '',
                activityCard: [],
            } 
            setUserData(newUser)
            console.log(newUser)
            setLoading(false)
            setLoggedIn(true)
            const userRef = collection(db, "users");
            setDoc(doc (userRef, email), newUser).then(res => console.log(res)).catch(err => console.log(err.message))
        }).catch(err => {
            if (err.message == 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
            setRegisterErrMessage('Password must be at least 6 characters');
            }else if (err.message == 'Firebase: Error (auth/email-already-in-use).') {
            setRegisterErrMessage('Email is already in use');
            } else {
                setRegisterErrMessage(err.message);
            }
            setLoggedIn(false)
        })
        
    }

    return (
        <div>
            {
                isLogin ?
                    <div className="bg-white w-screen h-screen flex justify-center items-center">
                        <form className='flex flex-col m-10 p-3 h-[300px] justify-between items-center shadow-progressBar rounded-2xl' onSubmit={handleLogin}>
                            <h3 className="font-extrabold text-xl text-fuchsia-900">Login to continue</h3>
                            <p className="text-red-500 text-center">{ loginErrMessage }</p>
                            <p className="text-red-500 text-center">{ loading && 'wait a minute...' }</p>
                            <input className="border-bg-fuchsia-900 border-b-2 focus:outline-none px-2 py-2" type="text" value={email} placeholder='email' onChange={e => setEmail(e.target.value)} required/>
                        
                            <input className="border-bg-fuchsia-900 border-b-2 focus:outline-none px-2 py-2" type="password" value={password} placeholder='Password' onChange={e => setPassword(e.target.value)} required/>
                        
                            <div>
                                <button className="bg-fuchsia-900 w-full text-white font-bold px-5 py-2 rounded-2xl" type="submit">Login</button>
                            </div>
                            <p>Don't Have an account ? <span className="text-fuchsia-600 cursor-pointer" onClick={() => setIsLogin(false)} >Register</span> </p>
                        </form>
                    </div>
                    :
                    <div className="bg-white w-screen h-screen flex justify-center items-center">
                        <form className="flex flex-col m-10 p-3 h-[300px] justify-between items-center shadow-progressBar rounded-2xl" onSubmit={handleRegister}>
                            <h3 className="font-extrabold text-xl text-fuchsia-900">Register to begin</h3>
                            <p className="text-red-500 text-center">{ registerErrMessage }</p>
                                <input className="border-bg-fuchsia-900 border-b-2 focus:outline-none px-2 py-2" type="type" value={email} placeholder='email' onChange={e => setEmail(e.target.value)} required/>
                        
                                <input className="border-bg-fuchsia-900 border-b-2 focus:outline-none px-2 py-2" type="password" value={password} placeholder='* Password' onChange={e => setPassword(e.target.value)} required/>
                            <div>
                                <button className="bg-fuchsia-900 w-full text-white font-bold px-5 py-2 rounded-2xl" type="submit">Register</button>
                            </div>
                            <p>Already Registered? <span className="text-fuchsia-600 cursor-pointer" onClick={() => setIsLogin(true)} >Login</span> </p>
                    
                        </form>
                    </div>
            }
        </div>
    )
}

export default Login