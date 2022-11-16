// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
};


/* 
const firebaseConfig = {
  apiKey: "AIzaSyBXkVTolSXjEmJMeH6hr6cbz33IKtomYP0",
  authDomain: "doctors-portal-8ed53.firebaseapp.com",
  projectId: "doctors-portal-8ed53",
  storageBucket: "doctors-portal-8ed53.appspot.com",
  messagingSenderId: "816256495257",
  appId: "1:816256495257:web:29bbaecd3fad284e569208"
};
 */

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;