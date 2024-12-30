import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "",
  authDomain: "fir-bf8cc.firebaseapp.com",
  projectId: "fir-bf8cc",
  storageBucket: "fir-bf8cc.appspot.com",
  messagingSenderId: "1066552938509",
  appId: "1:1066552938509:web:9346523a8d2e8aeec64544",
  measurementId: "G-YYH4JGKXFE",
};

// Initialize Firebase
const config = initializeApp(firebaseConfig);
export const auth = getAuth(config);
export const firestore = getFirestore(config);
