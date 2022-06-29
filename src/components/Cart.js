import React from 'react';
import { useContext } from 'react';
import { contexto } from './CartContext';

const Cart = ({title, price, quantity, id}) => {

  const resultadoContext = useContext(contexto);

  const eliminar = () => {

    resultadoContext.eliminarProducto(id)

  }

  return (
    <div className='div-productos-carrito'>
      <p>{title} - {price} - {quantity}</p> <button onClick={eliminar}>Remove item</button>
    </div>
  )
}

export default Cart