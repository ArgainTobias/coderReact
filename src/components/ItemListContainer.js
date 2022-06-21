import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import {productos} from "../utils/productos";
import {customFetch} from "../utils/customFetch";
import { useParams } from "react-router-dom";
import { getProductByCategory } from "../utils/customFetch";
            

const ItemListContainer = (props) => {
    
    const [elementos, setElemento] = useState([]);
    const {category} = useParams();


    useEffect(() => {

        if(!category){

            customFetch(productos)
            .then(r => {
                setElemento(r)
            }); //r===productos porque el parámetro del resolve(), si no hay error en la promesa, pasa directamente como parámetro al then
        }
        else{

            getProductByCategory(category)
            .then(res => {
                setElemento(res)
            });
            
        }

    }, [category])

    if(elementos.length > 0){

        return(
            <section className="catalogo">
                {category ? "" : <h1>Home</h1>}
                <h2>Products</h2>
                <div className={props.clase}>
                    <ItemList items={elementos}/>
                </div>
            </section>
        );

    }
    else{
        return(
            
            <h3>Cargando...</h3>

        )
    }

};

export default ItemListContainer;
