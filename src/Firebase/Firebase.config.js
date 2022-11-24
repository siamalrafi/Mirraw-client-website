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

// apiKey: "AIzaSyDlYgOYMxXC_R-MCpI0rGHtt6gModcRRQ8",
// authDomain: "mirraw-ebac6.firebaseapp.com",
// projectId: "mirraw-ebac6",
// storageBucket: "mirraw-ebac6.appspot.com",
// messagingSenderId: "302858858315",
// appId: "1:302858858315:web:8ed60558537c5ffa2602ce"


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;