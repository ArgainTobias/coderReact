import { Link } from "react-router-dom";

const Item = ({ tittle, price, image, id}) => {

  return (
      <div className="div-div-producto">  
        <div className="div-producto">
          <h4 className="tittle-prod">{tittle}</h4>
          <img src={image} alt="" />
          <Link to={`/item/${id}`}>View details</Link>
          <h4>Price: ${price}</h4>
        </div>
      </div>
  )

}

export default Item;