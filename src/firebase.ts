// 9.0.0
import { initializeApp } from "firebase/app";
// Auth
import { getAuth, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
// Store
import { getFirestore } from "firebase/firestore";
// Strage
import { getStorage } from "firebase/storage";

const app = initializeApp({
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
});

export const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  console.log(user);
});
export const provider = new GoogleAuthProvider();

export const db = getFirestore(app);
export const storage = getStorage(app);

// export default app;
