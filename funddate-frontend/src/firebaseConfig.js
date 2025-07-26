// This file connects our app to our Firebase "online locker"

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Make sure your Firebase configuration from the Firebase website is pasted here
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// This gives us access to the "filing cabinet" AND exports it so other files can use it.
export const db = getFirestore(app);
