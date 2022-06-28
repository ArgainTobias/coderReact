import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { contexto } from "./CartContext";

const CartWidget = () => {

  const resultadoContext = useContext(contexto);


  return (
    <NavLink className="icono-carrito material-symbols-outlined" to={"/cart"}> <i>shopping_cart</i> <p>{resultadoContext.cantidadTotal}</p></NavLink>
  )
};

export default CartWidget;