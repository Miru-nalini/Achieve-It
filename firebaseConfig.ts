import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAOKEqaV1b0MWN06oUvCMFF8ETM_Uu1H3E",
  authDomain: "achieve-it-2adf1.firebaseapp.com",
  projectId: "achieve-it-2adf1",
  storageBucket: "achieve-it-2adf1.firebasestorage.app",
  messagingSenderId: "46003294311",
  appId: "1:46003294311:web:376fbde814d0ebb61fc4c2",
  measurementId: "G-PCPYC1QGZ6"
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
