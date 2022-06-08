import React from "react";
import Carrousel from "../components/Carrousel/Carrousel";
import Card from "../components/Card/Card";

import Img from "../assets/paquete.png";

import "../scss/home.scss";


const Home = () => {
    return (
        <>
            <Carrousel />

            <div className="cards-title-container mt-5 ">
                <h5 className="text-muted">Nuevos productos </h5>
                <hr />
            </div>
            <div className="cards-container">
                <div className="row">
                    <Card img={Img} title="Carro" retailer="Amazon" />
                    <Card img={Img} title="Holaiia" retailer="Amazon" />
                    <Card img={Img} title="Holaiia" retailer="Amazon" />
                </div>
            </div>
        </>
    );
}


export default Home;