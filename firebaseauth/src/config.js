// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWpwYDtfRu6QanpWmlECV1m7yEWVml014",
    authDomain: "react-b0c93.firebaseapp.com",
    projectId: "react-b0c93",
    storageBucket: "react-b0c93.appspot.com",
    messagingSenderId: "71818474987",
    appId: "1:71818474987:web:c4666f8837dcefb14f95ae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export const db=getFirestore(app)

export const GoogleAuth = async () => {
    const provider = new GoogleAuthProvider()
    return await signInWithPopup(auth, provider)
}


export const SignupWithEmail = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const LoggedInWithEmail = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password)
}


