import CartWidget from "./CartWidget";

const NavBar = (props) => {
    if(props.inHeader===true){
        return(
            <nav>
                <ul>
                    <li><a href="">Inicio</a></li>
                    <li><a href="">Productos</a></li>
                    <li><a href="">Contacto</a></li>
                </ul>
                <CartWidget/>
            </nav>
        );
    }
    else{
        return(
            <nav>
                <ul>
                    <li><a href="">Facebook</a></li>
                    <li><a href="">Instagram</a></li>
                    <li><a href="">Twitter</a></li>
                </ul>
            </nav>
        )
    }
    
};

export default NavBar;