import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { contexto } from "./CartContext";

const CartWidget = () => {
  const { cantidadTotal } = useContext(contexto);

  return (
    <div className="contenedor-carrito-bar">
      <NavLink className="icono-carrito material-symbols-outlined" to={"/cart"}>
        <i>shopping_cart</i> 
      </NavLink>
      <p>{cantidadTotal}</p>
    </div>
  );
};

export default CartWidget;
