import React from 'react';
import './Doctor.css'
const Doctor = ({ doctor }) => {
    const { img, name} = doctor;
    return (
            //    show our doctors
                     <div class="col-md-4 container">
                            <div class="work-item">
                                <img src={img} alt="" />
                                <div class="work-overlay">
                                   <div class="icon">
                                            <span> {name}</span>
                                        <ul>
                                            <li><i class="fab fa-facebook-square"></i></li>
                                            <li><i class="fab fa-instagram-square"></i></li>
                                        </ul>
                                  </div>
                                </div>
                            </div>
                     </div>
    );
};

export default Doctor;