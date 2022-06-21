import {productos} from "./productos";

export const customFetch = (time, task) => {

    return new Promise ((resolve) => {

        setTimeout(() => {

            resolve(task);

        }, time);

    });

}

export const getProductById = (id) => {

    return new Promise ((resolve) => {

        resolve(productos.find(prod => prod.id === id));
    });

}

export const getProductByCategory = (category) => {

    return new Promise ((resolve) => {

        resolve(productos.filter(prod => prod.category === category));
    });

}