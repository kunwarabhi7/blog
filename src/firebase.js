import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCLz_1o3azOn4wEb23P82VV5wGPfdsS_F0",
    authDomain: "blogtut-d79ff.firebaseapp.com",
    projectId: "blogtut-d79ff",
    storageBucket: "blogtut-d79ff.appspot.com",
    messagingSenderId: "689753305320",
    appId: "1:689753305320:web:74173bb896aae390efd95d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()