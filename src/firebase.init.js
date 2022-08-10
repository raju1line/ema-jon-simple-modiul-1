// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAizi4Rnc2woNSSvd3MxJah7kaqLfVUSQ0",
  authDomain: "ema-jon-simple-78c00.firebaseapp.com",
  projectId: "ema-jon-simple-78c00",
  storageBucket: "ema-jon-simple-78c00.appspot.com",
  messagingSenderId: "454582681295",
  appId: "1:454582681295:web:d5857fe98a34023b7601ba",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
