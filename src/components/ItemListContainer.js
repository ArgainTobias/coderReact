import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../utils/customFetch";
import {ProductLoader} from "./ProductLoader";

const ItemListContainer = (props) => {
    
    const [elementos, setElemento] = useState([]);
    const [loading, setLoading] = useState(true);
    const {category} = useParams();


    useEffect(() => {

        setLoading(true)

        getProductByCategory(category)
        .then(r => {
            setElemento(r)
            setLoading(false)
        }); //r===productos porque el parámetro del resolve(), si no hay error en la promesa, pasa directamente como parámetro al then

    }, [category])


    if(!loading){

        return(
            <section className="catalogo">
                {category ? <></> : <h1>Home</h1>}
                <h2>Our Products</h2>
                <div className={props.clase}>
                    <ItemList items={elementos}/>
                </div>
            </section>
        );

    }
    else{
        return(
            
            <h3>Cargando...</h3>
            // <ProductLoader/>

        )
    }

};

export default ItemListContainer;
