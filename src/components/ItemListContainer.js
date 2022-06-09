import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import productos from "../utils/productos";
import customFetch from "../utils/customFetch";

const ItemListContainer = (props) => {
    
    const [elementos, setElemento] = useState([]);

    useEffect(() => {

        customFetch(3000, productos)
        .then(r => setElemento(r))

    }, [elementos])

    if(elementos.length > 0){

        return(
            <>
            <section className="catalogo">
            <h2>Productos</h2>
            <div className={props.clase}>
                <ItemList items={elementos}/>
            </div>
            </section>
            </>
        );

    }
    else{
        return(
            <>
            
            <h3>Cargando...</h3>

            </>

        )
    }

};

export default ItemListContainer;
