import {useState} from "react";

const ItemCount = ({stock, initial, onAdd}) => {

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

    // const vaciarContador = () => {
    //     cambiarContador(contador - contador);
    // }

    return(
        <>
        <h5>Contador</h5>
        <div className="div-contador">
            <button className="material-symbols-outlined" onClick={disminuirContador}>close</button> 
            <p>{contador}</p> 
            <button className="material-symbols-outlined" onClick={aumentarContador}>add</button>
            <button className="vaciar" onClick={confirmar}>Confirmar</button>
            {/* <button className="vaciar" onClick={vaciarContador}>Vaciar</button> */}
        </div>
        </>
    );
}


export default ItemCount;