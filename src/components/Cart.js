import React from 'react';
import { useContext } from 'react';
import { contexto } from './CartContext';

const Cart = ({title, price, quantity, id}) => {

  const {eliminarProducto} = useContext(contexto);

  const eliminar = () => {

    eliminarProducto(id);

  }

  return (
    <div className='div-productos-carrito'>
      <p>{title} - {price} - {quantity}</p> 
      <div>
        <button onClick={eliminar}>Remove item</button>
      </div>
    </div>
  )
}

export default Cart