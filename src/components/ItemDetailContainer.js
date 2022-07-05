import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import { ProductLoader } from './ProductLoader';
import { collectionProd } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';


const ItemDetailContainer = () => {
  
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const {id} = useParams();

  useEffect(() => {

    const ref = doc(collectionProd, id);
    getDoc(ref)
      .then((response) => {

        setItem({

          id : response.id,
          ...response.data(),
          
        })
        
        setLoading(false);

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
      <ProductLoader/>
    )
  }
}

export default ItemDetailContainer