import { db } from "./firebase.js";
import { getDocs, collection } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-firestore.js";

//obtiene los datos de los productos, haciendo un llamada a la DB.
export async function getProducts(){
    try {
        const productos = collection(db, 'products');
        const productsSnapShot = await getDocs(productos);
        const productosList = productsSnapShot.docs.map(doc => doc.data())
        console.log(productosList)
        return productosList;
    } catch (error) {
        console.log('Error')
    }
}


