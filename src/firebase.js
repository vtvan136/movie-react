// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFwB9rIrEWq-g277sEcDRsSLqbdbXFYjU",
  authDomain: "movie-react-dd74b.firebaseapp.com",
  projectId: "movie-react-dd74b",
  storageBucket: "movie-react-dd74b.appspot.com",
  messagingSenderId: "393252992236",
  appId: "1:393252992236:web:fbe4737d87716f0c41a1c9"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
