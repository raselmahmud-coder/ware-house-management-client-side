// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNGXFSms2YlWHiNCUn4J5OdUbW1dZr4Yk",
  authDomain: "king-furniture.firebaseapp.com",
  projectId: "king-furniture",
  storageBucket: "king-furniture.appspot.com",
  messagingSenderId: "223772865610",
  appId: "1:223772865610:web:6225d8b0870b76bf7362b3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;