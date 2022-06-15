import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import {prod} from '../utils/productos';
import customFetch from '../utils/customFetch';


const ItemDetailContainer = () => {
  
  const [item, setItem] = useState({})

  useEffect(() => {

    customFetch(2000, prod)
    .then(r => setItem(r))

  })
  
  if(item !== {}){
  return (
      <>
        <ItemDetail producto={item}/>
      </>
    )
  }
  else{
    return (
      <>

      </>
    )
  }
}

export default ItemDetailContainer