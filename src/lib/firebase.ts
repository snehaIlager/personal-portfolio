// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBL9jxqIzRMUE-s0QAo0UU5PRDcuHVC28A",
  authDomain: "sneha-portfolio-53746.firebaseapp.com",
  projectId: "sneha-portfolio-53746",
  storageBucket: "sneha-portfolio-53746.firebasestorage.app",
  messagingSenderId: "1088727050879",
  appId: "1:1088727050879:web:280355fe211a52dedb6d4a"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);


const auth = getAuth(app);


export { db, auth};