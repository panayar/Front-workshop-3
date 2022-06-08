import React from "react";
import OrderItem from "../components/OrderItem/OrderItem";
import Imagen from "../assets/paquete.png";
import "../scss/Orders.scss";

const Orders = () => {

    return (<>
        <div className="orders-title mt-3 mb-3 text-muted">
            <h3>Tus Ordenes</h3>
        </div>



        <OrderItem picture={Imagen} title={"trampolin"} retailer={"Amazon"} state={"Enviado"} price={2000}></OrderItem>
    </>);

}


export default Orders;