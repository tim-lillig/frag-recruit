// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs, getDoc } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3blZZYig1Gfzx06b6guF2ovjCPSggG10",
  authDomain: "frag-recruit.firebaseapp.com",
  projectId: "frag-recruit",
  storageBucket: "frag-recruit.appspot.com",
  messagingSenderId: "391649503865",
  appId: "1:391649503865:web:24cffcab16ca17f353c2a8",
  measurementId: "G-CGZLHZ7KHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore(app);