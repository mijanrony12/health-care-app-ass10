import React from 'react';
import './Ambulance.css'
import ambulance from '../../../image/ambulance.png'
const Ambulanc = () => {
    return (
        <div >
            <h1 className="text-center mt-5 heading">Emergency Ambulance Service</h1>
            <div className="ambulance-section">
                <div>
                  <img src={ambulance} alt="" />
                </div>
                <div className="contact">
                    <h3><i class="fas fa-user"></i>Our Driver Number</h3>
                    <p><i class="fas fa-phone-square"></i>01730306187</p>
                    <p><i class="fas fa-phone-square"></i>01730306194</p>
                    <p><i class="fas fa-phone-square"></i>01730306188</p>
                </div>
            </div>
        </div>
    );
};

export default Ambulanc;