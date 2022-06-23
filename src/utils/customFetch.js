import {productos} from "./productos";


export const getProductById = (id) => {

    return new Promise ((resolve) => {

        setTimeout(() => {

            resolve(productos.find(prod => prod.id === id));
        
        }, 1000)
    });

}

export const getProductByCategory = (category) => {

    return new Promise ((resolve) => {

        setTimeout(() => {

           resolve(category ? productos.filter(prod => prod.category === category) : productos);

        }, 1000)
    });

}