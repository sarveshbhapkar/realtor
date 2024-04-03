// Import the functions you need from the SDKs you need
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxQNXsbP32D8TFXXCr3C4x6YIy7hhwkA0",
  authDomain: "realtor-cl.firebaseapp.com",
  projectId: "realtor-cl",
  storageBucket: "realtor-cl.appspot.com",
  messagingSenderId: "412575613987",
  appId: "1:412575613987:web:9bb63daf8d5fd8e8155d96"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()