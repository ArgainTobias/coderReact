import {useState} from "react";

const ItemCount = ({stock, initial}) => {

    const [contador,cambiarContador] = useState(initial);

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

        if(contador <= stock && contador > 0){
            alert("Producto agregado correctamente");
        }
        else{
            alert("Debe agregar una cantidad valida de productos para poder agregar al carrito");
        }
    }

    return(
        <>
        <div className="div-contador">
            <button className="restar material-symbols-outlined" onClick={disminuirContador}>close</button> 
            <p>{contador}</p> 
            <button className="sumar material-symbols-outlined" onClick={aumentarContador}>add</button>
        </div>
        <div className="contenedor-vaciar">
            <button className="vaciar" onClick={confirmar}>Confirmar</button>
        </div>
        </>
    );
}


export default ItemCount;