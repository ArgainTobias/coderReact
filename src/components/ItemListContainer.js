import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { ProductLoader } from "./ProductLoader";
import { collectionProd } from "../firebase"
import { getDocs, query, where } from "firebase/firestore";
import swal from "sweetalert";

const ItemListContainer = (props) => {
  const [elementos, setElemento] = useState([]);
  const [loading, setLoading] = useState(true);
  const { category } = useParams();

  useEffect(() => {

    setLoading(true)
    //1) Necesito la referencia de la coleccion
    const ref = category ? query(collectionProd, where("category", "==", category)) : collectionProd;

    //2) Hago la consulta
    const consulta = getDocs(ref);

    consulta
      .then((res)=>{
      
        // La consulta de firebase retorna un objeto, que adentro tiene un array (docs) el cual tiene una representacion de los productos
        const productosMapeados =  res.docs.map((referencia) => {

          const aux = referencia.data();
          aux.id = referencia.id;

          return aux;

        })

        setElemento(productosMapeados);
        setLoading(false);
      
      })
      .catch((error)=>{
        
        swal({
          title:"Error",
          text:"Por favor, intentelo denuevo mas tarde",
          icon:"error",
        })

      })

  }, [category]);

  if (!loading) {
    return (
      <section className="catalogo">
        {category ? <></> : <h1>Home</h1>}
        <h2>Our Products</h2>
        <div className={props.clase}>
          <ItemList items={elementos} />
        </div>
      </section>
    );
  } else {
    return (
      
      <ProductLoader/>
      
    );
  }
};

export default ItemListContainer;
