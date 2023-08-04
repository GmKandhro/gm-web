"use client"
import { createContext, useContext , useState,useEffect } from 'react';
import { initializeApp } from "firebase/app";
import {getAuth , createUserWithEmailAndPassword,signInWithPopup, GoogleAuthProvider , FacebookAuthProvider,signInWithEmailAndPassword, onAuthStateChanged,signOut } from 'firebase/auth'
const FirebaseContext = createContext(null);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWB-SZGTe_WwVpr2nzDf7H5e97lsngWMw",
  authDomain: "gm-presnal-web-app.firebaseapp.com",
  projectId: "gm-presnal-web-app",
  storageBucket: "gm-presnal-web-app.appspot.com",
  messagingSenderId: "38208832288",
  appId: "1:38208832288:web:8849d2ebc1f4f08f1f0d45"
};

export const useFirebase = ()=> useContext(FirebaseContext)
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Create a context provider
const firebaseAuto = getAuth(firebaseApp)
const googleProvider = new GoogleAuthProvider()
const facebookProvider = new FacebookAuthProvider()

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null)
    const signupwithemailandpassword = (email , password)=>{
        createUserWithEmailAndPassword(firebaseAuto, email,password).then(value => alert('success'))
    }
    const signupwithgoolge =()=>{
        signInWithPopup(firebaseAuto,googleProvider)
    }
    
    const signupwithfacebook =()=>{
        signInWithPopup(firebaseAuto,facebookProvider)
    }
    const signinWithEmialandPassword = (email,password)=>{
      signInWithEmailAndPassword(firebaseAuto , email, password).then(value=>{alert('success')}).catch(err=>alert("Email or password invaild"))
  }
  useEffect((user) => {
    onAuthStateChanged(firebaseAuto , (user)=>{
        if (user) {
            setUser(user)
        }else{
            setUser(null)
        }
    })
}, [])

const logout = ()=>{
    return signOut(firebaseAuto)
}
  return (

    <FirebaseContext.Provider value={{signupwithemailandpassword,signupwithgoolge,signupwithfacebook,signinWithEmialandPassword,user}}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

