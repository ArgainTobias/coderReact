import React from 'react';
import ItemCount from './ItemCount';

const ItemDetail = ({ producto }) => {
  return (
    <div className="div-detalle">
        <div>
            <img src={producto.image} alt={producto.tittle} />
        </div>
        <div className='div-detalle-info'>
            <h4>{producto.tittle}</h4>
            <p>{producto.description}</p>
            <p>Stock disponible: {producto.stock}</p>
            <p>Precio: ${producto.price}</p>
            <ItemCount stock={producto.stock} initial={1}/>
        </div>
    </div>
    )
}

export default ItemDetail