import React from 'react'
import bootstrap from 'bootstrap';
import Navbar from '../components/navbar/Navbar';
import CheckoutCart from '../components/CheckoutItem/CheckoutCart';
import { useHistory } from "react-router-dom";
import "../components/CheckoutItem/Checkout.scss";
import format from "../utils/format";


export default function Checkout() {
    const nombre = document.querySelector("#firstName");
    const apellido = document.querySelector("#lastName");
    const username = document.querySelector("#username");
    const phone = document.querySelector("#phone");
    const email = document.querySelector("#email");
    const password = "1234";
    const address = document.querySelector("#address");
    const tipoDocumento = "2";
    const numeroDocumento = "7777777";    
    const tipoTarjeta = "1"
    const cvv = document.querySelector("#cc-cvv");
    const nombreTajeta = "Mastercard"
    const numeroTarjeta = document.querySelector("#cc-number");
    const fechaVencimiento = document.querySelector("#cc-expiration");


    const onChekout = (e) => {
        e.preventDefault();
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(

                {
                    "id_documento" : 1,
                    "username" : "popo",
                    "num_doc" : 123456789,
                    "nombres" : "Jo Alerto",
                    "apellidos" : "erez Madrigal",
                    "telefono" : 38292748,
                    "correo" : "jrgito@unbosque.edu.co", 
                    "clave" : "13455", 
                    "direccion" : "calle 8 #87b - 51", 
                    "tarjeta_tipo" : "Davivienda", 
                    "numero_tarjeta" : "18808271827423", 
                    "nombre_tarjeta" : "Joge Madrigal", 
                    "expiracion" : "02/06", 
                    "cvv" : "172"
                }

            )
        };
      
        fetch('http://localhost:8080/checkout/create/1', requestOptions)
          .then(response => response.json())
          .then(data => {console.log(data)})
       

    }

    


return (

<>
    <Navbar> </Navbar>
    <div className="mt-5 container">
        <div className="row">
            <div className="col-md-4 order-md-2 mb-4">
                <h4 className="d-flex justify-content-between align-items-center mb-3">
                    <span className="text-muted">Your cart</span>
                    <span className="badge badge-secondary badge-pill">3</span>
                </h4>
                <CheckoutCart/>
            </div>
            <div className="col-md-8 order-md-1">
                <h4 className="mb-3">Billing address</h4>

                <form className="needs-validation" noValidate>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label for="firstName">First name</label>
                            <input type="text" className="form-control" id="firstName" 
                                ></input>
                            <div className="invalid-feedback">
                                Valid first name is required.
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label for="lastName">Last name</label>
                            <input type="text" className="form-control" id="lastName" 
                                ></input>
                            <div className="invalid-feedback">
                                Valid last name is .
                            </div>
                        </div>
                    </div>


                    <div className="row">
                        <div className="mb-3 col-md-6 ">
                            <label for="username">Username</label>
                            <input type="text" className="form-control" id="username"></input>
                        </div>

                        <div className="mb-3 col-md-6 ">
                            <label for="phonenumber">Phone number</label>
                            <input type="number" className="form-control" id="phone"
                            ></input>
                        </div>


                    </div>


                    <div className="mb-3">
                        <label for="email">Email</label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com"></input>
                        <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="password"></input>
                        <div className="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="address">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St"
                            ></input>
                        <div className="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 mb-3">
                            <label for="country">Tipo de documento</label>
                            <select className="form-select d-block w-100" id="country" >
                                <option value="">Choose...</option>
                                <option value="2">C.C</option>
                                <option value="1">C.E</option>
                                <option value="3">T.I</option>
                                <option value="4">R.C</option>
                            </select>
                            <div className="invalid-feedback">
                                Please select a valid country.
                            </div>
                        </div>
                        <div className="col-md-4 mb-3">
                            <label for="state">Numero de documento</label>
                            <input type="text" className="form-control" id="documento" placeholder="documento" ></input>
                        </div>

                    </div>
                    <hr className="mb-4">
                    </hr>
                    <h4 className="mb-3">Payment</h4>

                    <div className="d-block my-3">
                        <div className="custom-control custom-radio">
                            <input id="credit" name="paymentMethod" type="radio" className="custom-control-input"
                                 ></input>
                            <label className="custom-control-label" for="credit">Credit card</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input id="debit" name="paymentMethod" type="radio" className="custom-control-input"
                                ></input>
                            <label className="custom-control-label" for="debit">Debit card</label>
                        </div>
                        <div className="custom-control custom-radio">
                            <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input"
                                ></input>
                            <label className="custom-control-label" for="paypal">PayPal</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label for="cc-name">Name on card</label>
                            <input type="text" className="form-control" id="cc-name" placeholder="" ></input>
                            <small className="text-muted">Full name as displayed on card</small>
                            <div className="invalid-feedback">
                                Name on card is 
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <label for="cc-number">Credit card number</label>
                            <input type="text" className="form-control" id="cc-number" placeholder="" ></input>
                            <div className="invalid-feedback">
                                Credit card number is 
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3 mb-3">
                            <label for="cc-expiration">Expiration</label>
                            <input type="text" className="form-control" id="cc-expiration" placeholder=""
                                ></input>
                            <div className="invalid-feedback">
                                Expiration date 
                            </div>
                        </div>
                        <div className="col-md-3 mb-3">
                            <label for="cc-cvv">CVV</label>
                            <input type="text" className="form-control" id="cc-cvv" placeholder="" ></input>
                            <div className="invalid-feedback">
                                Security code 
                            </div>
                        </div>
                    </div>
                    <hr className="mb-4">
                    </hr>

                    <button  className="btn btn-primary btn-lg btn-block"  onClick={(e)=> onChekout(e)}>Continue to checkout</button>

                </form>
                <br /><br />
            </div>
        </div>
    </div>

</>

)
}