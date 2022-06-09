import "./item.scss";
import { Link } from "react-router-dom";
import prices from "../../utils/prices";


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
              {prices(price)}
              {price.decimals ? (
                <span className="itemDecimals">{price.decimals}</span>
              ) : null}    
          </p>
            {free_shipping ? (
                 <img className="freeShipping" src="../../assets/ic_shipping.png" alt="Envio gratis" />
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