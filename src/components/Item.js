import ItemCount from "./ItemCount";

const Item = ({id, tittle, description, price, stock, image}) => {

  return (
    <>
      <div className="div-div-producto">  
        <div className="div-producto" key={id}>
          <h4 className="tittle-prod">{tittle}</h4>
          <img src={image} alt="" />
          <p>{description}</p>
          <button>Ver detalles del producto</button>
          <h4>Stock disponible:{stock}</h4>
        </div>
        <ItemCount stock={stock} initial={1}/>
      </div>
    </>
  )

}

export default Item;