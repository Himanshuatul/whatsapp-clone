import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAjzibl-_CFVJb48ITQyXSTeNVsJBY7Gpk", // from your Firebase Console
  authDomain: "whatsapp-clone-frontend-1acdf.firebaseapp.com",
  projectId: "whatsapp-clone-frontend-1acdf",
  storageBucket: "whatsapp-clone-frontend-1acdf.appspot.com",
  messagingSenderId: "305854813652",
  
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
