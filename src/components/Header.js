import NavBar from "./NavBar"
import CartWidget from "./CartWidget";
import { NavLink } from "react-router-dom";

const Header = () => {
    return(
        <header>
            <NavLink to={"/"}><h2>Argain Shopp</h2></NavLink>
            <NavBar inHeader={true}/>
            <CartWidget/>
        </header>
    )
}

export default Header;