import React, { useContext } from 'react'
import { contexto } from './CartContext'

const Cart = () => {

  const resultadoContext = useContext(contexto)

  return (
    <div className='carrito'>
      <h2>Carrito</h2>
    </div>
  )
}

export default Cart