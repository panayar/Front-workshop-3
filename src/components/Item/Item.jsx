import React from "react";
import "./item.scss";

import formatPrice from "../../utils/format";



//Parametros del componentes
const Item = ({ picture, title, price , brand , retailer }) => {

  return (
    <div className="item-container">
      <div className="item-img" id="contenedor">
        <img src={picture} alt={title} />
      </div>

      <div className="item-detail" id="detalle">
        <div className="item-price">
          <p>
            {formatPrice(price)}
          </p>
          <p className="item-title">{title}</p>
          <p className="proveedor-text">Proveedor : {retailer}</p>
        </div>
      </div>

      <div className="item-brand">
        <p>{brand }</p>
      </div>
    </div>
  );
};

export default Item;
