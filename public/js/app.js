import { getProducts } from "./firestore.js";

getProducts().forEach(producto => {
    console.log(producto)
});
