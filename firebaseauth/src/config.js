// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpYEwueUiV9n8Kh4Qi3tNYocxkemzfPLY",
    authDomain: "yograj-454a1.firebaseapp.com",
    projectId: "yograj-454a1",
    storageBucket: "yograj-454a1.appspot.com",
    messagingSenderId: "949428115742",
    appId: "1:949428115742:web:3036eaaeb3a84b1558510f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

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


