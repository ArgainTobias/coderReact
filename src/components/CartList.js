import React from 'react'
import Cart from './Cart'

const CartList = ({productos}) => {
  return (
    productos.map(prod => {

        <Cart
            title={prod.title}
            price={prod.price}
            quantity={prod.quantity}
            image={prod.image}
        />

    })
  )
}

export default CartList