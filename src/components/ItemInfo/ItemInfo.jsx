import React from "react";

import "./itemInfo.scss";
import Free from "../../assets/ic_shipping@2x.png.png.png";
import formatPrice from "../../utils/format";
import { useSelector, useDispatch } from "react-redux";
import { setUnidades} from "../../slices/productSlice";


//Parametros del componente
const ItemInfo = ({ picture , title , marca, price, description , proveedor, add_to_cart, unidades , max}) => {

const unidadesProducto = useSelector((state) => state.product.unidades);
const inputUnidades = document.querySelector(".inputUnidades");

const dispatch = useDispatch();


const onInputCLick  = () => { 
  
  dispatch(setUnidades(inputUnidades.value));

}

return (
<div className="detail-container">
  <div className="detail-img">
    <img src={picture} alt={title} />
  </div>

  <div className="detail-description">
    <div className="product-condition">
      {marca}
    </div>
    <div className="product-condition">
     Unidades disponibles - {unidades}
    </div>
    <div className="title">{title} </div>

    <div className="Price">{formatPrice(price)}</div>
    <div className="unidades">
      <p>Unidades</p>
      <input className="inputUnidades" onChange={()=> onInputCLick()} type="number" max={max} /> 
    </div>
    <button className="detail-btn" onClick={add_to_cart}>Añadir al carrito</button>
  </div>

  <div className="product-description">
    <div className="title-description">Descripción del producto</div>
    <div className="product-condition"> Proveedor : {proveedor}</div>
    <div className="description">

      <p>{description}</p>
    </div>
  </div>
</div>
);
};

export default ItemInfo;