// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMg8iG-9LtyE0mBohHPA4lqvN2PZ0xBgs",
  authDomain: "fisino-fashion.firebaseapp.com",
  projectId: "fisino-fashion",
  storageBucket: "fisino-fashion.appspot.com",
  messagingSenderId: "834433446910",
  appId: "1:834433446910:web:968c47f44629879d08c6af",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
