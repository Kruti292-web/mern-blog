// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-4cca0.firebaseapp.com",
  projectId: "mern-blog-4cca0",
  storageBucket: "mern-blog-4cca0.appspot.com",
  messagingSenderId: "769502374392",
  appId: "1:769502374392:web:08f057837d5f40dc1d4e0d",
  measurementId: "G-P9J9NQY9YV"
};

export const app = initializeApp(firebaseConfig);