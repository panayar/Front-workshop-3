import React from 'react';
import { useState } from "react";
import CartItem from '../components/CartItem/CartItem';
import Navbar from '../components/navbar/Navbar'
import { useDispatch, useSelector } from "react-redux";
import {setCartProduct } from "../slices/productSlice";
import { useHistory } from "react-router-dom";
import {setTotalCartPrice} from "../slices/productSlice";
import formatPrice from "../utils/format";
import "../scss/Cart.scss";

import Imagen from "../assets/paquete.png";


export default function Cart() {

    //Acceso al estado del enrutador para poder navegar entre componentes
  let history = useHistory();
  const unidadesProducto = useSelector((state) => state.product.unidades);
  const listCartProducts = useSelector((state) => state.product.listCartProducts);
  const totalPrice = useSelector((state) => state.product.totalCartPrice);
 

  const [items , setItems] = useState([]);
  const [total, setTotal] = useState([]);

  const dispatch = useDispatch();


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

          dispatch(setTotalCartPrice(result.total));

          dispatch(setCartProduct(item));

        })
        .catch(err => {
          return Promise.reject(err)
        })

      }catch(Exception  ){

      }
    }

getProductsFromCart();

  return (
    <div>

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

      <div className="container total-container">
      <div className="row">
          <div className="col-6">
            <p className='total-text'>Total : </p>
           </div>
           <div className="col-6 ">
            <p className='total-text-price'>{formatPrice(total)}</p>
           </div>
      </div>
      </div>
      <button onClick={()=> goCheckout()} className='cart-btn'>Continuar</button>
    </div>
    </div>
  )
}
