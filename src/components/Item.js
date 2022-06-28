import { Link } from "react-router-dom";

const Item = ({ title, price, image, id}) => {

  return (
      <div className="div-div-producto">  
        <div className="div-producto">
          <h4 className="tittle-prod">{title}</h4>
          <div className="div-img">
            <img src={image} alt="" />
          </div>
          <Link to={`/item/${id}`}>View details</Link>
          <h4>Price: ${price}</h4>
        </div>
      </div>
  )

}

export default Item;