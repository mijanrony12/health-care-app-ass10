import React from 'react';
import './Doctors.css'
import useDoctors from '../../Hooks/useDoctors';
import Doctor from '../Doctor/Doctor';

const Doctors = () => {
    const [doctors]=useDoctors()
    return (
        <div className="container my-5">
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
    );
};

export default Doctors;