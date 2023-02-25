// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4N7tSevqcFycwrZlQQ2_p-x4YwTDek58",
  authDomain: "alurageek-ecommerce.firebaseapp.com",
  projectId: "alurageek-ecommerce",
  storageBucket: "alurageek-ecommerce.appspot.com",
  messagingSenderId: "748501211269",
  appId: "1:748501211269:web:c8fde58fed5487b972b1ec",
  measurementId: "G-X0G4WJ5MCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);