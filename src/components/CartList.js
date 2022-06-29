import React from 'react'
import Cart from './Cart'

const CartList = ({productos}) => {
  return (
    
    productos.map(prod => {

      return(

        <Cart
          title={prod.title}
          price={`$${prod.price}`}
          quantity={`Cantidad: ${prod.quantity}`}
          id={prod.id}
        />

      )

    })
  )
}

export default CartList