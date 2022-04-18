import React from 'react'
import format from "../../utils/format";
import "./Checkout.scss";

export default function checkoutItem({itemName, units, price}) {
return (
<div>
    <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
            <h6 className="my-0 titleItem">{itemName}</h6>
            <small className="text-muted">Unidades {units}</small>
        </div>
        <span className="text-muted">{format(price)}</span>
    </li>

</div>
)
}