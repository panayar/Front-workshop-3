import React from "react";
import "./OrderItem.scss";
import formatPrice from "../../utils/format";


const OrderItem = ({picture, title, state, price, retailer}) => {


    return (<>
        <div className="order-container">
            <div className="order-img" id="contenedor">
                <img src={picture} alt={title} />
            </div>
            <div className="order-detail" id="detalle">
                <h5 className="order-title">{title}</h5>
                <p className="order-retail">{retailer}</p>
            </div>
            <div className="order-status">
                <span class="badge text-bg-success">{state}</span>
            </div>
        
            <div className="order-price">
                <h5 className="text-muted">Precio</h5>
                <p>
                    {formatPrice(price)}
                </p>
            </div>

        </div>
    </>);
}


export default OrderItem;