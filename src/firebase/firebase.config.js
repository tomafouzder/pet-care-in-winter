// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCFNF_pbCwv0UocOBoFlvjon-zEhxsTRI8",
    authDomain: "pet-care-in-winter-cb80f.firebaseapp.com",
    projectId: "pet-care-in-winter-cb80f",
    storageBucket: "pet-care-in-winter-cb80f.firebasestorage.app",
    messagingSenderId: "123164091139",
    appId: "1:123164091139:web:4da3d0817c56d199e83f36"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;