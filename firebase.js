import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAmVdudvWjHkrWxK6ARhaf6foGBQUgHejY",
  authDomain: "testrn-51c76.firebaseapp.com",
  projectId: "testrn-51c76",
  storageBucket: "testrn-51c76.appspot.com",
  messagingSenderId: "492310475394",
  appId: "1:492310475394:web:e68f251ef63e60820ffa9b",
  measurementId: "G-C2ZRYLJLGF"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore();

export {
  auth,
  db
}