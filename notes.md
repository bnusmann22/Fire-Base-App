// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzG9NVmcDrkPCJaERm3lILqgD2qzR_Zdw",
  authDomain: "fire-base-app-5ba6d.firebaseapp.com",
  projectId: "fire-base-app-5ba6d",
  storageBucket: "fire-base-app-5ba6d.firebasestorage.app",
  messagingSenderId: "230951231041",
  appId: "1:230951231041:web:e4d9689afe545bd7eaf0c0",
  measurementId: "G-E4VMLVPGYY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);