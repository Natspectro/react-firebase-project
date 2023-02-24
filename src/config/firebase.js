import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVbG7fexIPy2aoaO4xPW3YB4ZKzCZUE8M",
  authDomain: "fir-react-project-11cf3.firebaseapp.com",
  projectId: "fir-react-project-11cf3",
  storageBucket: "fir-react-project-11cf3.appspot.com",
  messagingSenderId: "953616315478",
  appId: "1:953616315478:web:b8e0573ce2d683d226f7f7",
  measurementId: "G-3SCQP2LYQZ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
