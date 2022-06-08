import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ItemInfo from "../components/ItemInfo/ItemInfo";
import { setListProduct , setCartProduct } from "../slices/productSlice";



export default function Detail() {
const { id } = useParams();
const dispatch = useDispatch();

const productDetail = useSelector((state) => state.product.listProducts);
const listCartProducts = useSelector((state) => state.product.listCartProducts);
const unidadesProducto = useSelector((state) => state.product.unidades);

// console.log("Unidades" , unidadesProducto);


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
console.log(unidadesProducto)
 if (unidadesProducto === 0 || unidadesProducto.isEmpty){
    alert(`Debe ingresar una cantidad`)
  }
  else {
    alert("Pruducto agregado al carrito")
  }
  
  //mandar producto al carrito
  dispatch(setCartProduct(productDetail));

  // console.log(productDetail)


  //Agregar postgres 
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      "variante_id" : productDetail.variante_id ,
      "cantidad" : unidadesProducto
    })
};
fetch('http://localhost:8080/carrito/addProduct/1', requestOptions)
    .then(response => response.json())

    //Agregar redis 
    const requestOptionsRedis = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "variante_id" : productDetail.variante_id ,
        "cantidad" : unidadesProducto
      })
  };

  fetch('http://localhost:8080/redis/addToCarrito/1', requestOptions)
    .then(response => response.json())

}


return (
<div>
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