import ItemDetailContainer from "./ItemDetailContainer";
import ItemListContainer from "./ItemListContainer";

const Main = () => {
    return(
        <main>
            <h1>Home</h1>
            <ItemListContainer clase="productos"/>
            <ItemDetailContainer/>
        </main>
    );
};

export default Main;