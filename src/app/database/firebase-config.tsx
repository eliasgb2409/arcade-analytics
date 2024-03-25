import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDF1t-pxORS555ZLUGZcJVmJiJe39_VUuU",
  authDomain: "game-stats-b7bc3.firebaseapp.com",
  databaseURL: "https://game-stats-b7bc3-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "game-stats-b7bc3",
  storageBucket: "game-stats-b7bc3.appspot.com",
  messagingSenderId: "681587076783",
  appId: "1:681587076783:web:8d8975a06f409e6ea22e5a",
  measurementId: "G-FVR6VJLFRL"
};

const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app)