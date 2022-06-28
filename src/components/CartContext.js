import React, { createContext, useState } from 'react'
import { productos } from '../utils/productos';


export const contexto = createContext();

const Provider = contexto.Provider;
//Provider : Es un componente que viene adentro de un contexto y sirve para : 1) Determina quienes tienen acceso a la informacion y 2) Determina el valor del contexto

export const CartContext = ({children}) => {
    
    const [carrito, setCarrito] = useState([]);
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [precioTotal, setPrecioTotal] = useState();
    
    let copiaCarrito = carrito.slice()


    const isInCart = (id) => carrito.some((prod) => prod.id === id)
          

    const agregarProducto = (prodId, cantidad) => {

        let estaId = isInCart(prodId); 
        
        if(!estaId){

            alert("Se hace confirmado su pedido");

            let producto = productos.find((prod) => prod.id === prodId);

            if(cantidad > 1){

                producto.quantity += cantidad-1;

            };

            copiaCarrito.push(producto);

            setCarrito(copiaCarrito);
            setCantidadTotal(cantidadTotal + cantidad);
            

        }
        else{

            alert("Ya ha seleccionado una cantidad de ese producto");
            
        }

    }

    const eliminarProducto = (prodId) => {

        let estaId = isInCart(prodId);

        if(estaId){

            
            let producto = copiaCarrito.find((prod) => prod.id === prodId);
            
            const indice = copiaCarrito.indexOf(producto);

            copiaCarrito.splice(indice,1);
            setCarrito(copiaCarrito);
            setCantidadTotal(cantidadTotal - producto.quantity);
            
            alert("El producto ha sido eliminado correctamente");

        }
        else{

            alert("Ese producto no está en el carrito");

        }

    }

    const vaciarCarrito = () => {

        copiaCarrito.length = 0;
        setCarrito(copiaCarrito);

        setCantidadTotal(cantidadTotal - cantidadTotal);

    }

    const valorDelContexto = {

        carrito : carrito,
        cantidadTotal : cantidadTotal,
        precioTotal : precioTotal,
        agregarProducto : agregarProducto,
        eliminarProducto : eliminarProducto,
        vaciarCarrito : vaciarCarrito,
        
    }

  return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}
