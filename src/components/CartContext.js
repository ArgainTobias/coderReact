import React, { createContext, useState } from 'react'
import { productos } from '../utils/productos';


export const contexto = createContext();

const Provider = contexto.Provider;
//Provider : Es un componente que viene adentro de un contexto y sirve para : 1) Determina quienes tienen acceso a la informacion y 2) Determina el valor del contexto

export const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState([]);
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [precioTotal, setPrecioTotal] = useState();


    const isInCart = (prodId) => carrito.some((prod) => prod.id === prodId)
          

    const agregarProducto = (prodId, cantidad) => {

        const estaId = isInCart(prodId);
        
        if(!estaId){

            let producto = productos.find((prod) => prod.id === prodId);
            console.log(producto);
            
            setCarrito(producto);
            setCantidadTotal(cantidadTotal + cantidad);
            console.log(carrito);

        }
        else{

            alert("Ya ha seleccionado una cantidad de ese producto");
            
        }

    }

    const eliminarProducto = (prodId) => {

        const estaId = isInCart(prodId);

        if(estaId){

            let producto = carrito.find((prod) => prod.id === prodId);

            const indice = carrito.indexOf(producto);

            carrito.splice(indice,1);
            setCantidadTotal(cantidadTotal - 1);

        }
        else{

            alert("Ese producto no está en el carrito");

        }

    }

    const valorDelContexto = {

        carrito : carrito,
        cantidadTotal : cantidadTotal,
        precioTotal : precioTotal,
        agregarProducto : agregarProducto,
        eliminarProducto : eliminarProducto,
        
    }

  return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}
