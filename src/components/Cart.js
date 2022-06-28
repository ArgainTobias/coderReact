import React from 'react'

const Cart = ({title, price, quantity, image}) => {

  return (
    <div className='div-producto-carrito'>
      <p>{title} - {price} - {quantity}</p>
    </div>
  )
}

export default Cart