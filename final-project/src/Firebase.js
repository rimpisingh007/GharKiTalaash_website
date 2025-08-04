// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6vTS-ioe1avRcP1Jzn7417u0WUBOpE14",
  authDomain: "pgfinder-c77b2.firebaseapp.com",
  projectId: "pgfinder-c77b2",
  storageBucket: "pgfinder-c77b2.firebasestorage.app",
  messagingSenderId: "527374422022",
  appId: "1:527374422022:web:ec84fb99eee135a1cdf387",
  measurementId: "G-JKG520RRC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth()
export const db=getFirestore()