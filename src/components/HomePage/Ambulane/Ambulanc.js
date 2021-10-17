import React from 'react';
import './Ambulance.css'
import ambulance from '../../../image/ambulance.png'
const Ambulanc = () => {
    return (
        <div>
            <h1>Emergency Ambulance Service</h1>
            <div>
                  <img src={ambulance} alt="" />
            </div>
            <div>
                  <p>01730306187</p>
                  <p>01730306194</p>
                  <p>01730306188</p>
            </div>
        </div>
    );
};

export default Ambulanc;