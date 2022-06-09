import React from "react";
import "../scss/seller/seller.scss";
import Icon from "../assets/sell-icon.png";

const Seller = () => {
    return (

        <>
            <div className="seller-container">
                <h1 className="text-muted seller-title">Sell a product <img className="sell-icon" src={Icon}></img></h1>
                <form action="">

                    <div className="form-seller">

                        <input type="text" className="form-control mb-3" id="product-name" placeholder="Nombre del producto" required />
                        <input type="number " className="form-control mb-3 " id="product-price" placeholder="$ Precio" required />
                        <input type="number " className="form-control mb-3 " id="product-units" placeholder="Unidades" required />
                        <input type="text " className="form-control mb-3 " id="product-retailer" placeholder="Proveedor" required />
                        <textarea class="form-control mb-3" id="exampleFormControlTextarea1" rows="3" placeholder="Descripcion producto" required></textarea>
                         <p className="upload-title">Sube una imagen</p><br />
                        <input type="file" accept=".png, .jpg, .jpeg" class="form-control-file mb-3" id="product-image" required/>

                        <button type="submit" className="btn btn-primary w-100 mb-3">Publicar producto</button>
                    </div>

                </form>
            </div>

        </>

    );
}

export default Seller;