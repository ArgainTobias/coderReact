import ItemDetailContainer from "./ItemDetailContainer"
import ItemListContainer from "./ItemListContainer";
import { Route, Routes } from "react-router-dom";

const Main = () => {
    return(
        <main>
            <Routes>
                <Route path="/" element={<ItemListContainer clase="productos"/>}></Route>
                <Route path="/categoria/:category" element={<ItemListContainer clase="productos"/>}></Route>
                <Route path="/item/:id" element={<ItemDetailContainer/>}></Route>
            </Routes>
        </main>
    );
};

export default Main;