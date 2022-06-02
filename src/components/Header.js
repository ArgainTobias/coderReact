import NavBar from "./NavBar"

const Header = () => {
    return(
        <header>
            <a href=""><h2>Titulo</h2></a>
            <NavBar inHeader={true}/>
        </header>
    )
}

export default Header;