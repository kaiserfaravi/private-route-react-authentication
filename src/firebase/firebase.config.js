// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4SgIaj2osq1L51x7DrOpK_TbvzwLANZQ",
  authDomain: "auth-private-route-eaa7b.firebaseapp.com",
  projectId: "auth-private-route-eaa7b",
  storageBucket: "auth-private-route-eaa7b.firebasestorage.app",
  messagingSenderId: "138371288619",
  appId: "1:138371288619:web:63f939ad92b9a10603a46e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;