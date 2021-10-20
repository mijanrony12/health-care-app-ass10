import React from 'react';
import { Link } from 'react-router-dom';
import useDoctors from '../../../Hooks/useDoctors';
import useServices from '../../../Hooks/useServices';
import Doctor from '../../Doctor/Doctor';
import Service from '../../Service/Service';
import Ambulanc from '../Ambulane/Ambulanc';
import Banner from '../Banner/Banner';
import './Home.css'
const Home = () => {
    const [ doctors ] = useDoctors()
    const [ services ] = useServices()
    return (
        // website homepage create
        <div>
            <Banner></Banner>
            <div className="container">
                    <h1 className="text-center my-5 heading">Our Services</h1>
                    <div className="row gy-4">
                             {
                        services.slice(0, 8).map(service => <Service
                            key={ service.id }
                            service={service}
                        ></Service>)
                              }
                   </div>
                   <div className="text-end mt-4 fs-4">
                       <Link to="/services">All Service Here</Link>
                   </div>
            </div>
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
                <div className="text-end mt-4 fs-4">
                    <Link to="/doctors">All Doctor Here</Link>
                 </div>
         </div>
            <Ambulanc></Ambulanc>
        </div>
    );
};

export default Home;