import {productos} from "./productos";


export const getProductById = (id) => {

    return new Promise ((resolve) => {


        resolve(productos.find(prod => prod.id === id));
        
    });

}

export const getProductByCategory = (category) => {

    return new Promise ((resolve) => {


        resolve(category ? productos.filter(prod => prod.category === category) : productos);

    });

}