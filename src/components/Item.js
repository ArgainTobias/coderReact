const Item = ({id, tittle, description, price, stock, image}) => {

  return (
      <div className="div-div-producto">  
        <div className="div-producto">
          <h4 className="tittle-prod">{tittle}</h4>
          <img src={image} alt="" />
          <button>Ver detalles del producto</button>
          <h4>Precio:${price}</h4>
        </div>
      </div>
  )

}

export default Item;