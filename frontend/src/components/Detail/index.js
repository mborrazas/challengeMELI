import React from "react";
import "./detail.scss";
import prices from "../../utils/prices";

function Detail({picture, title, condition, sold_quantity, description, price}){
        console.log(price);
    return ( 
        <article>
            <div className="detailContainer">
                <div className="detailImage">
                    <img src={picture} alt={title} />
                </div>
                <div className="detailInfo">
                    <p className="detailCoindition">
                        {`${condition === "new" ? "Nuevo" : "Usado"} - ${sold_quantity} vendidos`}
                    </p>
                    <h1 className="detailTitle">{title}</h1>
                    <p className="detailPrice">
                    {price && prices(price)}
                    {price && price.decimals ? (
                        <span className="itemDecimals">{price.decimals}</span>
                    ) : null}    
                    </p>    
                    <button className="detailButton">Comprar</button>
                </div>
            </div>
            <div className="detailDescription">
                <p className="descriptionTitle">
                    Descripci&oacute;n del producto
                </p>
                <p className="descriptionText">{description}</p>
            </div>
        </article>
    )
}

export default Detail;