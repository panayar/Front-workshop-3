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
                <div id="carouselExampleControls" class="carousel slide carrousel-container" data-bs-ride="carousel">
                    <div class="carousel-inner ">
                        <div class="carousel-item active">
                            <img class="d-block carrousel-img" src={FirstSlide}></img>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block carrousel-img" src={SecondSlide}></img>
                        </div>
                        <div class="carousel-item">
                            <img class="d-block carrousel-img" src={ThirdSlide}></img>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>

            </div>

        </>
    );
}



export default Carrousel;