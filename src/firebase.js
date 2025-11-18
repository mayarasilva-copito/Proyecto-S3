// firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyB7lTXaj8H4jWDcQeM4iVC8fQDnDJf71p8",
  authDomain: "proyecto-happytails.firebaseapp.com",
  projectId: "proyecto-happytails",
  storageBucket: "proyecto-happytails.firebasestorage.app",
  messagingSenderId: "927209335150",
  appId: "1:927209335150:web:e22dc5d30c6d8659bcf97f",
  measurementId: "G-CVGT834LBE"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export { app };
