// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbpv2EgTIbX1_lNmSOpn0fpPCOmubcclo",
  authDomain: "online-course-finder-97ef4.firebaseapp.com",
  projectId: "online-course-finder-97ef4",
  storageBucket: "online-course-finder-97ef4.firebasestorage.app",
  messagingSenderId: "163820548315",
  appId: "1:163820548315:web:a78fcfcc9b8cc57bc85cfe",
  measurementId: "G-SY62M9S2SF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut };