import React from "react";
import "./card.css";

const Card = ({ img, title, retailer }) => {
    return (
        <>
            <div className="col-4">
                <div className="card card-container">
                    <img src={img} className="card-img-top card-img" alt={title} />
                    <div className="card-body card-content">
                        <div className="row">
                            <div className="col-6">
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">{retailer}</p>

                            </div>
                            <div className="col-6 btn-container">
                                <a className="btn btn-primary card-btn">Info</a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}


export default Card;