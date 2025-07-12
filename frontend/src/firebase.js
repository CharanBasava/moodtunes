// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// ✅ Your Firebase config (copied from Firebase console)
const firebaseConfig = {
  apiKey: "AIzaSyDNwGp6Z9miVYOwEJBSmN9-YLM5UzBIFIc",
  authDomain: "mood-tunes-29bde.firebaseapp.com",
  projectId: "mood-tunes-29bde",
  storageBucket: "mood-tunes-29bde.firebasestorage.app",
  messagingSenderId: "776192840675",
  appId: "1:776192840675:web:5c6a6d17b535f677ccc6d6"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Auth and Firestore instances
const auth = getAuth(app);
const db = getFirestore(app);

// ✅ Export to use in other files
export { auth, db };