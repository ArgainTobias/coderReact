import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import { BrowserRouter } from "react-router-dom";
import {CartContext} from "./components/CartContext";


const App = () => {
    return(
        <BrowserRouter>
            <CartContext>
                <Header/>
                <Main/>
            </CartContext>
            <Footer/>
        </BrowserRouter>
    )
};

export default App;