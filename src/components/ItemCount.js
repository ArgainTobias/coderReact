import {useContext, useState} from "react";
import { contexto } from "./CartContext";

const ItemCount = ({stock, initial, onAdd}) => {

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

    const confirmar = (prodId) => {

        onAdd(contador)
        contador !== 0 ? alert("Se ha confirmado su pedido") : alert("No ha seleccionado una cantidad válida de productos")
        resultadoContext.agregarProducto(prodId, contador)

    }

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


export default ItemCount;