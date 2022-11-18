/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
 import { initializeApp } from "firebase/app";

 const firebaseConfig = {
  apiKey: "AIzaSyA7b4Cv1BEi_DaxkWYaZFRZ1OW5Cg_ly64",
  authDomain: "friendlychat-8bc7d.firebaseapp.com",
  projectId: "friendlychat-8bc7d",
  storageBucket: "friendlychat-8bc7d.appspot.com",
  messagingSenderId: "1057563260485",
  appId: "1:1057563260485:web:6b0799edff6c183c43952c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}