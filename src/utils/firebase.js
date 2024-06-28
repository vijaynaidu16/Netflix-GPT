// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmjPPqNbWAYCQriZkxtOm2jU8OAeRQ0Rw",
  authDomain: "netflixgpt-c76ef.firebaseapp.com",
  projectId: "netflixgpt-c76ef",
  storageBucket: "netflixgpt-c76ef.appspot.com",
  messagingSenderId: "925725301316",
  appId: "1:925725301316:web:6cb6b77cbf92b44ff57a11",
  measurementId: "G-LBXM1RXZR9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
