import React from 'react';
import { useContext } from 'react';
import { contexto } from './CartContext';

const Cart = ({title, price, quantity, id, image}) => {

  const {eliminarProducto} = useContext(contexto);

  const eliminar = () => {

    eliminarProducto(id);

  }

  return (
    <div className='div-productos-carrito'>
      <div className='div-productos-carrito-img'>
        <img src={image} alt="" />
        <p>{title} - {price} - {quantity}</p> 
      </div>
      <div>
        <button onClick={eliminar}>Remove item</button>
      </div>
    </div>
  )
}

export default Cart