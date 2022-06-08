import React from "react";
import "../SignUp/signUp.scss";
import Logo from "../../../assets/logoLogin.png";

const SignUp = () => {
    return (
        <>

            <div className="sign-up-container">
                <form>
                    <div className="mb-3 sign-img">
                        <img src={Logo} ></img>
                    </div>
                    <div className="form-title">
                        <h6>Registro</h6>
                    </div>
                    <div className=" d-flex  mb-3 ">
                        <div className="col-6 p-1">
                            <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Nombre" required />
                        </div>
                        <div className="col-6 mt-1">
                            <input type="text" className="form-control" id="name" aria-describedby="emailHelp" placeholder="Apellido" required />
                        </div>
                    </div>

                    <div className="mb-3">
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="password" placeholder="Contraseña" required />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="repeatPass" placeholder="Repite contraseña" required />
                    </div>

                    <button type="submit" className="btn-login mb-3">Registrate</button>

                </form>
            </div>
        </>


    );
}



export default SignUp;