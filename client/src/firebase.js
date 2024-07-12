// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "analog-clock-5e295.firebaseapp.com",
  projectId: "analog-clock-5e295",
  storageBucket: "analog-clock-5e295.appspot.com",
  messagingSenderId: "1027776437645",
  appId: "1:1027776437645:web:688036e8dbb4989e92b1c4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);