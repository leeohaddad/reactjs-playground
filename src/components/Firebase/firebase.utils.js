// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics, logEvent } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithRedirect, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBS_SzZ-Q8_k0MsMpWmz3tRzeEL-GIZluI",
  authDomain: "ultimate-frisbee-api.firebaseapp.com",
  projectId: "ultimate-frisbee-api",
  storageBucket: "ultimate-frisbee-api.appspot.com",
  messagingSenderId: "576394825464",
  appId: "1:576394825464:web:c76f0acd1c3cd3aeddb50d",
  measurementId: "G-S560WCH8GS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const authProvider = new GoogleAuthProvider();
authProvider.setCustomParameters({ prompt: 'select_account' });
export const auth = getAuth();
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, authProvider);
export const signInWithGooglePopup = () => signInWithPopup(auth, authProvider);

logEvent(analytics, 'firebase_initialized');
