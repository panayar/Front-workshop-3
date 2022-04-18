import React from 'react';
import { useState } from "react";
import { useSelector } from "react-redux";
import CheckoutItem from './CheckoutItem';
import format from "../../utils/format";
import "./Checkout.scss";


export default function CheckoutCart() {

const listCartProducts = useSelector((state) => state.product.listCartProducts);
const totalPrice = useSelector((state) => state.product.totalCartPrice);



console.log(listCartProducts);

return (
<div>
    <div className="">

        {
        listCartProducts.map((item) => {
        return (
        <div className="" key={item.producto_id}>
            <CheckoutItem itemName={item.titulo} price={item.precio} units={item.cantidad}/>
        </div>
        )
        })

        }

        <div className="total-c cart-review-conatiner">
            <div className="row">
                <div className="col-6">
                    <p>Total : </p>
                </div>
                <div className="col-6">
                    <p className='text-price-total'>{format(totalPrice)}</p>
                </div>
            </div>
        </div>
    </div>
</div>
)
}