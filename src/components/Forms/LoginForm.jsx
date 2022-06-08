import React from "react";
import Logo from "../../assets/logoLogin.png";
import "./login.scss";
import { useHistory } from "react-router-dom";



const LoginForm = () => {
    
    let history = useHistory();
    
    const goSignUp = () => { 
        history.push('/sign-up');
    }

    return (
        <div className="login-container">
            <form>
                <div className="mb-3 login-img">
                    <img className="" src={Logo}></img>
                </div>
                <div className="form-title">
                        <h6>Login</h6>
                    </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Email" required/>
                        <div id="emailHelp" className="form-text">No compartiremos tu información con nadie más </div>
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="password" placeholder="Contraseña" required />
                </div>
                <button type="submit" className="btn-login mb-3">Ingresar</button>

                <small className="text-muted mt-2 d-flex "> No tienes cuenta?  <p className="p-signUp" onClick={()=> {goSignUp()}}>Registrate</p></small>
            </form>
        </div>
    )
}


export default LoginForm;