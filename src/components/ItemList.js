import Item from "./Item";

const ItemList = ({items}) => {

    return(

        items.map(i => 
            <Item 
                id={i.id}
                tittle={i.tittle}
                description={i.description}
                price={i.price}
                stock={i.stock}
                image={i.image}
                key={i.id}
            />
        )

    );
    
//     const [elemento, setElemento] = useState([]);
    
//     useEffect(() => {

//         //setTimeout(function, number);
//         const MockAsync = new Promise((res) => {

//             setTimeout(() => {
    
//                 const productoDB = [items];
//                 res(productoDB);
    
//             },2000);

//         })

//         MockAsync.then((productos) => {

//             setElemento(productos);

//         })

//     })


//     if(elemento.length > 0){
        
//         return(
//             <>
//               <Item Item={items}/>
//             </>
//         );

//     }
//     else{

//         return(
//             <>
//                 <h3>Cargando...</h3>
//             </>
//         )
//     }
};

export default ItemList;