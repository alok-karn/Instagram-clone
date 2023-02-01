// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import "firebase/firestore";
// import firebase from "@react-native-firebase/app";
// import firestore from "@react-native-firebase/firestore";
// import { firestore } from "react-native-firebase";

const firebaseConfig = {
    apiKey: "AIzaSyB4oDIDEQatWmrpX52zropUuNTNBZEwTxc",
    authDomain: "instagram-clone-rn-66780.firebaseapp.com",
    projectId: "instagram-clone-rn-66780",
    storageBucket: "instagram-clone-rn-66780.appspot.com",
    messagingSenderId: "563086688214",
    appId: "1:563086688214:web:53d8652a43ece371a6ee77",
    measurementId: "G-2GNXVBTKER",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const db = firestore();

const firebaseAuth = getAuth(app);
export { firebaseAuth }; // add db in future.
