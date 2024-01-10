import { initializeApp } from "firebase/app";
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBgOkfDltordUz7MkenXwimvQvBR4gGJEs",
  authDomain: "sooqsquare-o.firebaseapp.com",
  projectId: "sooqsquare-o",
  storageBucket: "sooqsquare-o.appspot.com",
  messagingSenderId: "650433671979",
  appId: "1:650433671979:web:3ea46a3514085cf467cb6e",
  measurementId: "G-4GZFRR8L5B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export {app}