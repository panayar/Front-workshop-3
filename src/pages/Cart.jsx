import React from 'react';
import { useState } from "react";
import CartItem from '../components/CartItem/CartItem';
import Navbar from '../components/navbar/Navbar'
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import formatPrice from "../utils/format";
import "../scss/Cart.scss";


export default function Cart() {

    //Acceso al estado del enrutador para poder navegar entre componentes
  let history = useHistory();
  const unidadesProducto = useSelector((state) => state.product.unidades);
  const listCartProducts = useSelector((state) => state.product.listCartProducts);

  const [items , setItems] = useState([]);
  const [total, setTotal] = useState([]);

  // console.log(listCartProducts, unidadesProducto , "aja")


  const goCheckout =() => {
    history.push(`/checkout`);
  };


    //Obtener datos de inicio con los item del carrito 
const getProductsFromCart = () => {

      try {
        fetch(`http://localhost:8080/carrito/getCarrito/1`)
        .then((res) => res.json())
        .then((result) => {
          //Variable que contiene todos los resultados de la busqueda
          const item = result.carrito;
      
          setItems(item);
          setTotal(result.total);

        });

      }catch(Exception  ){

      }
    }

    getProductsFromCart();

  return (
    <div>
    <Navbar></Navbar>

    <div className="cart-container">

      {
        items.map((item) => {
          return (
            <div className="cart-container" key={item.producto_id}>
              <CartItem units={item.cantidad} picture={item.imagen} price={item.precio} retailer={item.proveedor} title={item.titulo}></CartItem>
            </div>
          )
        })

        }

      <div className="total">
        <h4 className='total-text' >Total : {formatPrice(total)}</h4>
      </div>
      <button onClick={()=> goCheckout()} className='cart-btn'>Continuar</button>
    </div>
    </div>
  )
}
