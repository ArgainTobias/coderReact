import NavBar from "./NavBar"
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { contexto } from "./CartContext";

const Header = () => {

    const resultadoContext = useContext(contexto);


    if(resultadoContext.carrito.length > 0){

        return(
            <header className="header-con-carrito">
                <NavLink to={"/"}><h2>Argain Shop</h2></NavLink>
                <NavBar inHeader={true}/>
                <CartWidget/>
            </header>
        )

    }
    else{

        return(

            <header className="header-sin-carrito">
                <NavLink to={"/"}><h2>Argain Shop</h2></NavLink>
                <NavBar inHeader={true}/>
            </header>

        )

    }
}

export default Header;