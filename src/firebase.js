// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXP8QL4ZemDdiM3gJbVTkgrrD-hTQ4Ql4",
  authDomain: "movie-react-25a54.firebaseapp.com",
  projectId: "movie-react-25a54",
  storageBucket: "movie-react-25a54.appspot.com",
  messagingSenderId: "907459114066",
  appId: "1:907459114066:web:0e61d8bca0d0397cbf5b8b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
