import React, {useContext} from 'react';
import { contexto } from './CartContext';
import CartList from './CartList';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';



const CartListContainer = () => {

    const resultadoContext = useContext(contexto);

    const vaciar = () => {

        resultadoContext.carrito.length > 0 ? resultadoContext.vaciarCarrito() : swal({
            title: "The cart is already empty",
            icon: "info",
        });

    }


    if(resultadoContext.carrito.length > 0){

        return (
            <div className='div-carrito'>
    
                <h2>Carrito</h2>
                <CartList productos={resultadoContext.carrito}/>
                <button className='vaciarCarrito' onClick={vaciar}>Empty cart</button>
    
            </div>
        )

    }
    else{

        return(

            <div className='div-carrito'>

                <h3>No hay productos en el carrito</h3>
                <Link className='volver-a-comprar' to={"/"}>Volver a comprar</Link>

            </div>

        )

    }
}

export default CartListContainer