import React from 'react'
import CartItem from '../components/CartItem/CartItem';
import Navbar from '../components/navbar/Navbar'
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "../scss/Cart.scss";
import Paquete from "../assets/paquete.png";
import {setCartProduct } from "../slices/productSlice";


export default function Cart() {

    //Acceso al estado del enrutador para poder navegar entre componentes
    let history = useHistory();


  const listCartProducts = useSelector((state) => state.product.listCartProducts);

  console.log(listCartProducts)


  const goCheckout =() => {
    history.push(`/checkout`);
  };

  return (
    <div>
    <Navbar></Navbar>

    <div className="cart-container">

      <CartItem picture={listCartProducts.imagen} price={listCartProducts.precio} retailer={listCartProducts.proveedor} title={listCartProducts.titulo}></CartItem>
      
      <button onClick={()=> goCheckout()} className='cart-btn'>Continuar</button>
    </div>
     
   
    </div>
  )
}
