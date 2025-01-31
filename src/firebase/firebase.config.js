// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC1uYWqtPSuXVnKqlDXJrNrMkyKx30Zey8",
  authDomain: "assignment-10-painting.firebaseapp.com",
  projectId: "assignment-10-painting",
  storageBucket: "assignment-10-painting.appspot.com",
  messagingSenderId: "77909295623",
  appId: "1:77909295623:web:3236faf90c3ab64ee2a0a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;