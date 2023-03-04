//Inicializando la firebase
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js';
//Importando los modulos necesarios
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyB4N7tSevqcFycwrZlQQ2_p-x4YwTDek58",
    authDomain: "alurageek-ecommerce.firebaseapp.com",
    projectId: "alurageek-ecommerce",
    storageBucket: "alurageek-ecommerce.appspot.com",
    messagingSenderId: "748501211269",
    appId: "1:748501211269:web:c8fde58fed5487b972b1ec",
    measurementId: "G-X0G4WJ5MCH"    
};

const app = initializeApp(firebaseConfig);
//exportar la inicializacion de la base de datos, para mantener el orden.
export const db = getFirestore(app);