import "./item.scss";
import { Link } from "react-router-dom";

function Item({id, picture, title, condition, free_shipping, price}){
    return (
        <li className="item">
        <Link
          to={{
            pathname: `/items/${id}`
          }}
        >
          <img src={picture} alt={title} />
        </Link>
        <div className="itemInfo">
          <p className="itemPrice">
            
          
              <span className="itemDecimals"></span>
    
          </p>
            {free_shipping ? (
                <span className="itemShipping">Env&iacute;o Gratis!</span>
            ) : null}
            
          <Link
            className="itemTitle"
            to={{
              pathname: `/items/${id}`
            }}
          >
            <p>{title}</p>
          </Link>
        </div>
        <p className="itemCondition">
            {condition === "new" ? "Nuevo" : "Usado"}
        </p>
      </li>
    )
}

export default Item;