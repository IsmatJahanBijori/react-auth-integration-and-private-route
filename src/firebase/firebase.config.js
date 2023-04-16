// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCItzO0bpuS3IUeu3yDoLaIjMyCl_L1Rvw",
  authDomain: "react-auth-intgratn-privroute.firebaseapp.com",
  projectId: "react-auth-intgratn-privroute",
  storageBucket: "react-auth-intgratn-privroute.appspot.com",
  messagingSenderId: "188208493896",
  appId: "1:188208493896:web:721fa8b8cbe316b57b6f7d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;