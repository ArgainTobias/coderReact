import Item from "./Item";

const ItemList = ({items}) => {

    return(

        items.map(i => 
            <Item 
                id={i.id}
                title={i.title}
                description={i.description}
                price={i.price}
                stock={i.stock}
                image={i.image}
                key={i.id}
            />
        )

    );
};

export default ItemList;