import React from 'react';
import ItemCount from './ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({ producto }) => {

    const [desaparecer, setDesaparecer] = useState(0);

    const onAdd = (cantidadSeleccionada) => {

        setDesaparecer(cantidadSeleccionada);

    }


  return (
    <div className="div-detalle">
        <div>
            <img src={producto.image} alt={producto.title} />
        </div>
        <div className='div-detalle-info'>
            <h4>{producto.title}</h4>
            <p>{producto.description}</p>
            <p>Stock available: {producto.stock}</p>
            <p>Price: ${producto.price}</p>
            {desaparecer ? <Link to={"/cart"} className="confirmar">Terminar mi compra</Link> : <ItemCount stock={producto.stock} initial={1} onAdd={onAdd}/>}
        </div>
    </div>
    )
}

export default ItemDetail