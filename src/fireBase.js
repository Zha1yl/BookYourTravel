// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDsA_iquKq6q0VKiVLdCKNeD7R-ryI13Yg",
  authDomain: "travel-4b93b.firebaseapp.com",
  projectId: "travel-4b93b",
  storageBucket: "travel-4b93b.appspot.com",
  messagingSenderId: "538737205193",
  appId: "1:538737205193:web:ec1241f2541931bdd49218",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app);
export default app;
