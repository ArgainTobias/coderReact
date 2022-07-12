import { NavLink } from "react-router-dom";


const NavBar = ({ inHeader }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to={inHeader ? "/categoria/clothing" : "https://www.facebook.com/"}
          >
            {inHeader ? "Mens clothing" : <i class="fa-brands fa-facebook"></i>}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={inHeader ? "/categoria/jewelery" : "http://Instagram.com"}
          >
            {inHeader ? "Jewelery" : <i class="fa-brands fa-instagram"></i>}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={inHeader ? "/categoria/electronics" : "http://Twitter.com"}
          >
            {inHeader ? "Electronics" : <i class="fa-brands fa-twitter"></i>}
          </NavLink>
        </li>
        <li>
          <NavLink to={inHeader ? "/categoria/women's clothing" : ""}>
            {inHeader ? "Women's clothing" : ""}
          </NavLink>
        </li>
      </ul>
      <input type="checkbox" id="check" />
      <label htmlFor="check">
        <i class="bars material-symbols-outlined">dns</i>
      </label>
    </nav>
  );
};

export default NavBar;
