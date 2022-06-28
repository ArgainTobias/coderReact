import React, {useContext} from 'react';
import { contexto } from './CartContext';


const CartListContainer = () => {

    const resultadoContext = useContext(contexto);

    const vaciar = () => {

        resultadoContext.carrito.length > 0 ? resultadoContext.vaciarCarrito() : alert("El carrito ya está vacío");

    }


  return (
        <>
            <div className='div-carrito'>

                <h2>Carrito</h2>
                <button className='vaciarCarrito' onClick={vaciar}>Empty cart</button>

            </div>
        </>
    )
}

export default CartListContainer