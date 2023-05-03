import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getDatabase } from "@firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAN0wJq-ImfNDBV9MXRMbNRAV3GmYOZcKM",
    authDomain: "projeto-genius-650c9.firebaseapp.com",
    projectId: "projeto-genius-650c9",
    storageBucket: "projeto-genius-650c9.appspot.com",
    messagingSenderId: "41737308714",
    appId: "1:41737308714:web:43da647d5211f88d061153",
    measurementId: "G-DZNSTQQFYT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
