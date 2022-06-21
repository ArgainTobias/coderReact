import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import {getProductById} from '../utils/customFetch';
import { useParams } from 'react-router-dom';


const ItemDetailContainer = () => {
  
  const [item, setItem] = useState({});
  const {id} = useParams();

  useEffect(() => {

    getProductById(parseInt(id))
    .then(res => setItem(res))

  },[id])
  
  if(item !== {}){
    return (
      <>      
        <ItemDetail producto={item}/>
      </>
      )
  }
  else{
    return (
      <h3>cargando...</h3>
    )
  }
}

export default ItemDetailContainer