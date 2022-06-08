import React, { useState } from "react";
import "./navbar.scss";
import Logo from "./../../assets/logo-navbar.svg";
import SearchIcon from "./../../assets/ic_Search.png";
import Cart from "././../../assets/cart-icon.svg";
import { useHistory } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setListProduct } from "../../slices/productSlice";


export default function Navbar() {

  let history = useHistory();

  //Dispatch para enviar los datos al store
  const dispatch = useDispatch();

  const [element, setQuery] = useState("");

  //Metodos de busqueda por eventos
  const eventEnter = (evt) => (evt.key === "Enter" ? searchProducts() : "");
  const eventClick = () => search(element);

  const goMain = () => {
    history.push('/home/');
  };

  const searchProducts = () => {
    history.push('/search-products/');
    // search(element);
  }
  

  const goCart = () => {
    history.push('/cart/');
  };

  //Metodo que realiza la busqueda de datos
  const search = () => {
    try {
      fetch(`http://localhost:8080/producto/getByTitle/${element}`)
        .then((res) => res.json())
        .then((result) => {

          //Variable que contiene todos los resultados de la busqueda
          const products = result.productos

          //Despacha los datos a el store global
          dispatch(setListProduct(products));
          setQuery("");
        });

      goMain();

    } catch (Exception) { }
  };

  return (

    <>


      <div className="navContainer">
        <div className="search-cont">
          <img
            onClick={() => goMain()}
            className="searchBar-logo"
            src={Logo}
            width="80"
            alt="logo"
          />

          <input
            //obtiene la informacion del input
            onChange={(e) => setQuery(e.target.value)}
            value={element}
            onKeyPress={eventEnter}
            className="searchBar"
            placeholder="Buscar productos"
          />

          <button className="btn-searchBar" onClick={() => eventClick(element)}>
            <img src={SearchIcon} alt="magnifier-icon" />
          </button>

          <div className="cart-cont" onClick={() => goCart()}>
            <img src={Cart} alt="cart" />
          </div>
        </div>

      </div>

    </>
  );
}
