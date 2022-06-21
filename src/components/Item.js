import { Link } from "react-router-dom";

const Item = ({ tittle, price, image, id}) => {

  return (
      <div className="div-div-producto">  
        <div className="div-producto">
          <h4 className="tittle-prod">{tittle}</h4>
          <img src={image} alt="" />
          <Link to={`/item/${id}`} className="boton-ver-detalle">Ver detalle</Link>
          <h4>Precio:${price}</h4>
        </div>
      </div>
  )

}

export default Item;