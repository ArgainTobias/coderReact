// 1) Me traigo el metodo de autenticacion con firebase
import { initializeApp } from "firebase/app";
import {getFirestore, collection} from "firebase/firestore";


// 2) Traigo los keys privados de la plataforma web
const firebaseConfig = {
  apiKey: "AIzaSyDIpjaxiLiDUOT_tvGgLu-NricZaBnJU-Y",
  authDomain: "argain-shop-3ae96.firebaseapp.com",
  projectId: "argain-shop-3ae96",
  storageBucket: "argain-shop-3ae96.appspot.com",
  messagingSenderId: "509266530067",
  appId: "1:509266530067:web:c70f59a277b9e479ddd4e6"
};

// 3) Me autentico usando el metodo del paso 1 y los keys del 2
const app = initializeApp(firebaseConfig);


// 4) Obtener una referencia/puntero a la base de datos
export const db = getFirestore(app);

export const collectionProd = collection(db, "productos");