import {useContext, useState} from "react";
import { contexto } from "./CartContext";
import swal from "sweetalert";

const ItemCount = ({stock, initial, onAdd, id}) => {

    const [contador, cambiarContador] = useState(initial);
    const {carrito, eliminarProducto, agregarProducto} = useContext(contexto);

    const aumentarContador = () => {
        
        contador < stock && cambiarContador(contador + 1);
        
    }

    const disminuirContador = () => {

        contador > 0 && cambiarContador(contador - 1);
        
    }

    const confirmar = () => {

        onAdd(contador);
        
        contador ? agregarProducto(id, contador) : swal({
            title:"No ha seleccionado una cantidad válida de productos",
            icon:"error"
        })


    }

    const eliminar = () => {

        eliminarProducto(id)

    }

    if(carrito.some((prod) => prod.id === id)){

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