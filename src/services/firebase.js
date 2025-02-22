import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";  // ✅ Import these correctly
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDA6KI-P3YEB4XHrKwIXeVRMXyzcoxU8Lw",
  authDomain: "krafx-q1.firebaseapp.com",
  projectId: "krafx-q1",
  storageBucket: "krafx-q1.firebasestorage.app",
  messagingSenderId: "856919740893",
  appId: "1:856919740893:web:74843eb1cdd0e8ecece634"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, collection, addDoc };  // ✅ Now properly exporting