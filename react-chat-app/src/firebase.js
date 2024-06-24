import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDVOHIGocJgtfS3Y4Engx3ek8UzrCmiilg",
    authDomain: "chat-e5658.firebaseapp.com",
    projectId: "chat-e5658",
    storageBucket: "chat-e5658.appspot.com",
    messagingSenderId: "1051409635323",
    appId: "1:1051409635323:web:7d98584a63c1599e79dd5e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()