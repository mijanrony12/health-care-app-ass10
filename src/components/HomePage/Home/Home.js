import React from 'react';
import useDoctors from '../../../Hooks/useDoctors';
import Doctor from '../../Doctor/Doctor';
import Ambulanc from '../Ambulane/Ambulanc';
import Banner from '../Banner/Banner';
import './Home.css'
const Home = () => {
    const [doctors]=useDoctors()
    return (
        <div>
            <Banner></Banner>
            <div className="container">
                 <h1 className="text-center my-5 heading">Our Expert Doctors</h1>
                    <div className="row">
                    
                     {
                    doctors.slice(0, 3).map(doctor => <Doctor
                        key={ doctor.id }
                        doctor={doctor}
                    ></Doctor>)
                      }
                </div>
         </div>
            <Ambulanc></Ambulanc>
        </div>
    );
};

export default Home;