import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import {getProductById} from '../utils/customFetch';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
  
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {

    setLoading(true)

    getProductById(parseInt(id))
    .then(res => {
      setItem(res)
      setLoading(false)
    })

  },[id])
  
  if(!loading){
    return (
      <>      
        <ItemDetail producto={item}/>
      </>
      )
  }
  else{
    return (
      <h3>Cargando...</h3>
    )
  }
}

export default ItemDetailContainer