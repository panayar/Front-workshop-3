import React from "react";

import "./itemInfo.scss";
import formatPrice from "../../utils/format";
import { useSelector, useDispatch } from "react-redux";
import { setUnidades } from "../../slices/productSlice";


//Parametros del componente
const ItemInfo = ({ picture, title, marca, price, description, proveedor, add_to_cart, unidades, max }) => {

  const unidadesProducto = useSelector((state) => state.product.unidades);
  const inputUnidades = document.querySelector(".inputUnidades");

  const dispatch = useDispatch();


  const onInputCLick = () => {

    dispatch(setUnidades(inputUnidades.value));

  }

  return (
    <div className="detail-container">
      <div className="detail-img">
        <img src={picture} alt={title} />

        <br /><br />

        <div className="detail-variants">


          <img id="variant-1" src={picture} alt={title} />


          <img id="variant-2" src={picture} alt={title} />


          <img id="variant-3" src={picture} alt={title} />


        </div>
      </div>



      <div className="detail-description">
        <div className="product-brand">
          {marca}
        </div>
        <div className="product-condition">
          Unidades disponibles - {unidades}
        </div>
        <div className="title">{title} </div>

        <div className="price">{formatPrice(price)}</div>
        <div className="product-retailer"> Proveedor : {proveedor}</div>

        <div className="unidades">
          <p>Unidades</p>

          <input className="inputUnidades" onChange={() => onInputCLick()} type="number" max={max} />
        </div>

        <button className="detail-btn" onClick={add_to_cart}>Añadir al carrito</button>


        <div className="product-description">

          <div className="title-description">Detalle</div>
          <div className="description">
            <p>{description}</p>
          </div>
        </div>




      </div>



    </div>
  );
};

export default ItemInfo;