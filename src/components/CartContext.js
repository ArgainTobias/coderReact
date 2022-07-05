import React, { createContext, useState } from 'react'
import { productos } from '../utils/productos';
import swal from 'sweetalert';


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

            swal({
                title:"Your order has been confirmed",
                icon:"success"
            })

            let producto = productos.find((prod) => prod.id === prodId);

            copiaCarrito.push({
                ...producto,
                quantity : cantidad,
            });

            setCarrito(copiaCarrito);
            setCantidadTotal(cantidadTotal + cantidad);
            

        }
        else{

            swal({

                title:"You have already selected a quantity of this product",
                icon:"error",
            
            })
            
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
            
            swal({
                title:"The product has been successfully disposed of",
                icon:"success"
            })

        }

    }

    const vaciarCarrito = () => {

        setCarrito([]);

        setCantidadTotal(cantidadTotal - cantidadTotal);

        swal({
            title:"Cart has been emptied",
            icon:"info"
        })

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
