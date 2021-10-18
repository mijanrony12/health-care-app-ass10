import React from 'react';
import './Service.css'
const Service = ({ service }) => {
    const { name, title, price, desc, img } = service;
    return (
        <div className="col-md-4 col-lg-3">
                <div className="service">
                     <img src={ img } alt="" />
                        <div>
                    <h5>Name:- { name }</h5>
                    <h6>Title:- { title }</h6>
                    <p>Desc:-{ desc }</p>
                    <h4>Visit:- {price }</h4>
                        </div>
                </div>
        </div>
    );
};

export default Service;