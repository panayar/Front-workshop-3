import React from 'react'

export default function checkoutItem({itemName, description, price}) {
return (
<div>
    <li className="list-group-item d-flex justify-content-between lh-condensed">
        <div>
            <h6 className="my-0">{itemName}</h6>
            <small className="text-muted">{description}</small>
        </div>
        <span className="text-muted">${price}</span>
    </li>

</div>
)
}