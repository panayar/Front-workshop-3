import React, { useEffect, useState } from "react";
import "../";
import Navbar from "../components/navbar/Navbar";
import Item from "../components/Item/Item";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import '../scss/home.scss';

import Lupa from "../assets/lupa.png";

import { useDispatch } from "react-redux";
import { setListProduct , setListCategory } from "../slices/productSlice";

export default function Home() {
  //Acceso al estado del enrutador para poder navegar entre componentes
  let history = useHistory();

  //Datos almacenados en el store
  const productoSearch = useSelector((state) => state.product.listProducts);

  const [products , setProducts] = useState([]);
  const categories = useSelector((state) => state.product.listCategories);

useEffect (() => {

  getProductsFromRedis()
  getCategories()
} , [])


//Dispatch para enviar los datos al store
const dispatch = useDispatch();

  //Metodo para  redirigir a detail con el id correspondiente
  const goDetail = (id) => {
    history.push(`/detail-product/${id}`);
  };

  //Obtner datos de inicio con los item de redis
  const getProductsFromRedis = () => {

    try {

      fetch(`http://localhost:8080/redis/getAll`)
      .then((res) => res.json())
      .then((result) => {
        //Variable que contiene todos los resultados de la busqueda
        const products = result.productos;

        //Despacha los datos a el store global
        dispatch(setListProduct(result.productos));

        setProducts(products)

        // console.log("REDISSSS" , products)

      });

    }catch(Exception  ){

    }
  }

  //Que se ejecute la accion cuado se cargue la pagina
  window.onload = function () {
    getProductsFromRedis()
  }

//Obtener datos de categorias
  const getCategories =  () => {

    try {

    fetch(`http://localhost:8080/categoria/getAll`)
    .then((res) => res.json())
    .then((result) => {
      //Variable que contiene todos los resultados de la busqueda
      const categorias = result.categories;

      //Despacha los datos a el store global
      dispatch(setListCategory(categorias));


    });

  }catch(Exception  ){

  }


  }

  getCategories()

//Metodo que realiza la busqueda de datos de categorias 
var selection = document.getElementById("categorias");
function select() {
    let categoriaSeleccionada = selection.options[selection.selectedIndex].value;
    let categoryId = 0;

    switch(categoriaSeleccionada) {
      case "todos":
        categoryId = 0; 
        break;
      case "tecnologia":
        categoryId = 1;
        break;
      case "hogar":
        categoryId = 2;
        break;
      case "deporte":
        categoryId = 6;
        break;
      case "ropa":
        categoryId = 7;
        break;
     default:
        categoryId = 1;
        break;
  }
  getProductsByCategory(categoryId);

}

const getProductsByCategory = (categoryId) => { 

  try {
    
  fetch(`http://localhost:8080/producto/category/${categoryId}`)
  .then((res) => res.json())
  .then((result) => {
    //Variable que contiene todos los resultados de la busqueda
    const products = result.productos;

    setProducts(products)
  });

} catch (Exception) {}

}


  return (
    <div>
      <Navbar />
      <br></br>

      <div className="contenedor-categorias">

      <select name="cars" id="categorias" className="input-categorias" onChange={()=> select()}>
        <option value="todos">Todos</option>
        <option value="tecnologia">Tecnologia</option>
        <option value="hogar">Hogar y Muebles</option>
        <option value="deporte">Deporte y Fitness</option>
        <option value="ropa">Ropa</option>
      </select>

      </div>
      <br></br>

       {

      products !== undefined ?
      products.map((product) => (
          <div className="list-container" onClick={() => goDetail(product.producto_id)} key={product.producto_id}>
            <Item price={product.precio || product.Precio} title={product.Titulo || product.titulo} proveedor={product.proveedor_nombre || product.proveedor}  picture={product.imagen || product.Image} marca={product.marca}/>
          </div>
        ))
        :
      <div className="no-found-conatiner">
        <img src={Lupa} alt="lupa"></img>
        <h3>No encontramos lo que buscabas :( </h3>
      </div>
      }

      <br></br>
    </div>
  );
}
