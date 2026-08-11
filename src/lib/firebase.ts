import { initializeApp, getApps, getApp, type FirebaseOptions } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Public (client-safe) Firebase config — these values are meant to be exposed
// to the browser. Data access is protected by Firestore security rules, not
// by keeping this config secret. See firestore.rules in the repo root.
const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyAdMXD1m1nU1EyCq-U9WAHdIAxugNT7Grs",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "platoos-9e128.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "platoos-9e128",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "platoos-9e128.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "174272836678",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:174272836678:web:c57bc1243eac1a18594647",
};

export const firebaseApp = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const db = getFirestore(firebaseApp);
