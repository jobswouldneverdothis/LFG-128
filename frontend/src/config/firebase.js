import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCbSjOLfBxE1VFKYv6K6VbFrVT_1REq4-8",
  authDomain: "lfg128-ed7c5.firebaseapp.com",
  projectId: "lfg128-ed7c5",
  storageBucket: "lfg128-ed7c5.firebasestorage.app",
  messagingSenderId: "351436455162",
  appId: "1:351436455162:web:ac6afbe455f578ce605d43"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);