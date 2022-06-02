import NavBar from "./NavBar";

const Footer = () => {
    return(
        <footer>
            <NavBar inHeader={false}/>
            <p>&copy; Copyrigth</p>
        </footer>
    );
};

export default Footer;