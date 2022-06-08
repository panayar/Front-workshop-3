import React from "react";
import Img from "../../assets/paquete.png"
import "./carrousel.css";
import FirstSlide from "../../assets/slider-promo-1.png";
import SecondSlide from "../../assets/slider-promo-2.png";
import ThirdSlide from "../../assets/slider-promo-3.png";

const Carrousel = () => {
    return (
        <>
            <div className="carrousel-container mt-3 mb-3">
                <div id="carouselExampleControls" className="carousel slide carrousel-container" data-bs-ride="carousel">
                    <div className="carousel-inner ">
                        <div className="carousel-item active">
                            <img className="d-block carrousel-img" src={FirstSlide}></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block carrousel-img" src={SecondSlide}></img>
                        </div>
                        <div className="carousel-item">
                            <img className="d-block carrousel-img" src={ThirdSlide}></img>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

        </>
    );
}



export default Carrousel;