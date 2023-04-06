export const environment = {
    production:false
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDArg1hhMsoj7878RuOF8tRC4V90EIWLUw",
  authDomain: "allrecipes-app.firebaseapp.com",
  databaseURL: "https://allrecipes-app-default-rtdb.firebaseio.com",
  projectId: "allrecipes-app",
  storageBucket: "allrecipes-app.appspot.com",
  messagingSenderId: "888671269749",
  appId: "1:888671269749:web:67a75c005b8b287dc1d93c",
  measurementId: "G-BD41GWR3K3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);