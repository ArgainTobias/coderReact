import { NavLink } from "react-router-dom";

const NavBar = ({ inHeader }) => {
  return (
    <nav>
      <label htmlFor="check">
        <i className="bars material-symbols-outlined">menu</i>
      </label>
      <input type="checkbox" id="check" />
      <ul>
        <li>
          <NavLink
            to={inHeader ? "/categoria/clothing" : "https://www.facebook.com/"}
          >
            {inHeader ? "Mens clothing" : <i className="fa-brands fa-facebook"></i>}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={inHeader ? "/categoria/jewelery" : "http://Instagram.com"}
          >
            {inHeader ? "Jewelery" : <i className="fa-brands fa-instagram"></i>}
          </NavLink>
        </li>
        <li>
          <NavLink
            to={inHeader ? "/categoria/electronics" : `http://Twitter.com`}
          >
            {inHeader ? "Electronics" : <i className="fa-brands fa-twitter"></i>}
          </NavLink>
        </li>
        <li>
          <NavLink to={inHeader ? "/categoria/women's clothing" : ""}>
            {inHeader ? "Women's clothing" : ""}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
