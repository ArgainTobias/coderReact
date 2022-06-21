import {NavLink} from "react-router-dom"

const NavBar = ({ inHeader}) => {
    
    return(
        <nav>
            <ul>
                <li><NavLink to={inHeader ? "/categoria/clothing" : "https://www.facebook.com/"}>{inHeader ? "Clothing" : "Facebook"}</NavLink></li>
                <li><NavLink to={inHeader ? "/categoria/jewelery" : "http://Instagram.com"}>{inHeader ? "Jewelery" : "Instagram"}</NavLink></li>
                <li><NavLink to={inHeader ? "/categoria/electronics" : "http://Twitter.com"}>{inHeader ? "Electronics" : "Twitter"}</NavLink></li>
                <li><NavLink to={inHeader ? "/categoria/women's clothing" : ""}>{inHeader ? "Women's clothing" : ""}</NavLink></li>
            </ul>
        </nav>
    );  
};

export default NavBar;