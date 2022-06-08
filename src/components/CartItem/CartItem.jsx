import React, { useEffect } from 'react'
import formatPrice from "../../utils/format";
import Trash from '../../assets/trash.png';
import "./CartItem.scss"; 

export default function CartItem({picture, title, price , units }) {

  let trash = document.querySelector('.cart-delete');


  return (
    <div className="cart-container">
        <div className="cart-img" id="contenedor">
            <img src={picture} alt={title} />
        </div>
        <div className="cart-detail" id="detalle">
            <p className="cart-title">{title}</p>
        </div>
        <div className="cart-unidades">
            <p className='text-muted'>Unidades</p>
            {units}
        </div>
        <div className="cart-delete">
            <img alt='icon-trash' src={Trash}></img>
        </div>
        <div className="cart-price">
            <h5>Precio</h5>
            <p>
                {formatPrice(price)}
            </p>
        </div>

    </div>
)
}
