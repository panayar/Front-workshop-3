import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ItemInfo from "../components/ItemInfo/ItemInfo";
import { setListProduct , setCartProduct , setUnidades} from "../slices/productSlice";
import Navbar from "../components/navbar/Navbar";

import Producto from "../assets/paquete.png";


export default function Detail() {
const { id } = useParams();
const dispatch = useDispatch();

const productDetail = useSelector((state) => state.product.listProducts);
const listCartProducts = useSelector((state) => state.product.listCartProducts);
const unidadesProducto = useSelector((state) => state.product.unidades);

// console.log("Unidades" , unidadesProducto);


useEffect (() => {
   getProduct()
} , [])

const getProduct = () => {
  try {

    fetch(`http://localhost:8080/producto/getById/${id}`)
    .then((res) => res.json())
    .then((result) => {
      //Variable que contiene todos los resultados de la busqueda
      const products = result.producto[0];

      dispatch(setListProduct(products));

    });

  }catch(Exception  ){

  }
};

getProduct();


function agregarItemAlCarrito () {

  if(unidadesProducto > productDetail.stock){
    alert(`Solo se pueden agregar ${productDetail.stock} unidades`)
  }else if (unidadesProducto === 0){
    alert(`Debe ingresar una cantidad`)
  }
  
  //mandar producto al carrito
  dispatch(setCartProduct(productDetail));

  //mandar unidades al carrito






}



async function postData(url = '', data = {}) {

  
  // Opciones por defecto estan marcadas con un *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}









return (
<div>
  <Navbar />
  <br></br>

  {

      productDetail !== undefined?
      <>
        <ItemInfo picture={productDetail.imagen} title={productDetail.titulo} total_sold_items="5" price={productDetail.precio}
          description={productDetail.descripcion_1} proveedor={productDetail.proveedor} marca={productDetail.marca}
          unidades={productDetail.stock} add_to_cart={agregarItemAlCarrito}/>
      </>
      :
      console.log("No entro" )
    }
</div>
);
}