import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth"
import { useEffect, useState } from "react";

// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIUb0VOpztZh52ZMJAsS6SKHeQB9prAJ8",
  authDomain: "farfetch-b2702.firebaseapp.com",
  projectId: "farfetch-b2702",
  storageBucket: "farfetch-b2702.appspot.com",
  messagingSenderId: "624287874747",
  appId: "1:624287874747:web:c1646d6cb29e4baf5a339e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export const signup=(email,password)=>{
    return createUserWithEmailAndPassword(auth,email,password);
}

export const logOut=()=>{
    signOut(auth)
}

export const login=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password);
}
export const useAuth=()=>{
    const [currentUser, setCurrentUser] = useState();

    useEffect(()=>{
        const userDetails=onAuthStateChanged(auth, (user)=>{
            setCurrentUser(user)
        })
        return userDetails;
    },[])
    return currentUser;
}


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export const fireAuth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();