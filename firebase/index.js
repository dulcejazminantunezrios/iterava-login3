import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAI0n6AoM8tp-Xi7Mq4RCytA9DLctq9_Y0",
    authDomain: "iterava-login.firebaseapp.com",
    projectId: "iterava-login",
    storageBucket: "iterava-login.appspot.com",
    messagingSenderId: "539839882589",
    appId: "1:539839882589:web:027c9eaadd39f2eb3934b4"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth }