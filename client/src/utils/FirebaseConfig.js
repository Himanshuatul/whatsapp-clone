// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics, isSupported } from "firebase/analytics";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJzibI-_CFVJb48lTQyXSTeNVsJBY7Gpk",
  authDomain: "whatsapp-clone-frontend-1acdf.firebaseapp.com",
  projectId: "whatsapp-clone-frontend-1acdf",
  storageBucket: "whatsapp-clone-frontend-1acdf.appspot.com", // ✅ fixed .appspot.com
  messagingSenderId: "305854813652",
  appId: "1:305854813652:web:237f84d8d38b6e9afcf241",
  measurementId: "G-JFTK7YHHTZ"
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Export Firebase Auth instance
export const firebaseAuth = getAuth(app);

// Optional: Initialize Analytics safely (only in browser)
if (typeof window !== "undefined") {
  isSupported().then((supported) => {
    if (supported) {
      getAnalytics(app);
    }
  });
}

