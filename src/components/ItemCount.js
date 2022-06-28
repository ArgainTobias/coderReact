import {useContext, useState} from "react";
import { contexto } from "./CartContext";

const ItemCount = ({stock, initial, onAdd, id}) => {

    const [contador, cambiarContador] = useState(initial);
    const resultadoContext = useContext(contexto)

    const aumentarContador = () => {
        if(contador < stock){
            cambiarContador(contador + 1);
        }
    }

    const disminuirContador = () => {

        if(contador>0){
            cambiarContador(contador - 1);
        }
    }

    const confirmar = () => {

        onAdd(contador);
        
        contador ? resultadoContext.agregarProducto(id, contador) : alert("No ha seleccionado una cantidad válida de productos");


    }

    const eliminar = () => {

        resultadoContext.eliminarProducto(id)

    }

    if(resultadoContext.carrito.some((prod) => prod.id === id)){

        return(
            
            <div>
                <button className="eliminar" onClick={eliminar}>Remove product</button>
            </div>

        );    

    }
    else{

        return(
            <>
            <div className="div-contador-container">
                <div className="div-contador">
                    <button className="restar material-symbols-outlined" onClick={disminuirContador}>close</button> 
                    <span>{contador}</span> 
                    <button className="sumar material-symbols-outlined" onClick={aumentarContador}>add</button>
                </div>
            </div>
            <div className="confirmar-container">
                <button className="confirmar" onClick={confirmar}>Confirm</button>
            </div>
            </>
        );
        
    }

}


export default ItemCount;