import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyABjutfh3RMh-Hpof27r7HIIIUQRNms0hA",
    authDomain: "confbeer-tp-53c43.firebaseapp.com",
    projectId: "confbeer-tp-53c43",
    storageBucket: "confbeer-tp-53c43.appspot.com",
    messagingSenderId: "269009046161",
    appId: "1:269009046161:web:2986a05f5c64a2cf7bcd30",
    measurementId: "G-DEWKSVKEBC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
