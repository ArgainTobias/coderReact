import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer";
import { Route, Routes } from "react-router-dom";
import CartListContainer from "./CartListContainer";

const Main = () => {
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer clase="productos"/>}></Route>
                <Route path="/categoria/:category" element={<ItemListContainer clase="productos"/>}></Route>
                <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
                <Route path="/cart" element={<CartListContainer/>}></Route>
            </Routes>
        </main>
    );
};

export default Main;