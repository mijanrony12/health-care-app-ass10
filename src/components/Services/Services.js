import React from 'react';
import './Services.css';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [ services ] = useServices()
    console.log(services);
    return (
        <div className="container">
                <h1 className="text-center my-5 heading">Our Services</h1>
            <div className="row gy-4">
                  {
                    services.map(service => <Service
                        key={ service.id }
                        service={service}
                    ></Service>)
                  }
            </div>
        </div>
    );
};

export default Services;