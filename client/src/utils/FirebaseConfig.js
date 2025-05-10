// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJzibI-_CFVJb48lTQyXSTeNVsJBY7Gpk",
  authDomain: "whatsapp-clone-frontend-1acdf.firebaseapp.com",
  projectId: "whatsapp-clone-frontend-1acdf",
  storageBucket: "whatsapp-clone-frontend-1acdf.appspot.com",
  messagingSenderId: "305854813652",
  appId: "1:305854813652:web:237f84d8d38b6e9afcf241",
  measurementId: "G-JFTK7YHHTZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
