// src/services/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";


// Access environment variables using process.env
const firebaseConfig = {
  apiKey: "AIzaSyDA6KI-P3YEB4XHrKwIXeVRMXyzcoxU8Lw",
  authDomain: "krafx-q1.firebaseapp.com",
  projectId: "krafx-q1",
  storageBucket: "krafx-q1.firebasestorage.app",
  messagingSenderId: "856919740893",
  appId: "s1:856919740893:web:74843eb1cdd0e8ecece634",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Export necessary methods
export { db, collection, addDoc };