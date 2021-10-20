import React from 'react';
import './Doctors.css'
import useDoctors from '../../Hooks/useDoctors';
import Doctor from '../Doctor/Doctor';
import { Link } from 'react-router-dom';

const Doctors = () => {
    const [doctors]=useDoctors()
    return (
        <div className=" doctors-container">
              <div className="container my-5 doctors-container">
           
            <h1 className="text-center my-5 heading">Our Expert Doctors</h1>
             
            <div className="row gy-5">
                  {
                        doctors.map(doctor => <Doctor
                            key={ doctor.id }
                            doctor={doctor}
                        ></Doctor>)
                }
            
            </div>
           
        </div>
        </div>
    );
};

export default Doctors;