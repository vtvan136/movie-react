// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7u6PETdAs34ASN2o66o4JEWzEMZxws4o",
  authDomain: "movie-clone-e0c24.firebaseapp.com",
  projectId: "movie-clone-e0c24",
  storageBucket: "movie-clone-e0c24.appspot.com",
  messagingSenderId: "364064954508",
  appId: "1:364064954508:web:dee3f82c6d3619bb3203a9"
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
