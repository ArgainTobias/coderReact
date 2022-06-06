import ItemCount from "./ItemCount";

const ItemListContainer = (props) => {
    return(
        <div className={props.clase}>
            <h2>Productos</h2>
            <p>Acá iría el catálogo de productos</p>
            <ItemCount stock={5} initial={1} onAdd={() => {}}/>
        </div>
    );
};

export default ItemListContainer;