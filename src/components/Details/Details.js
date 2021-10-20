import React from 'react';
import './Details.css'
import { useHistory, useParams } from 'react-router';
import useServices from '../../Hooks/useServices';





const Details = () => {
    const { id } = useParams()

    const [ services ] = useServices()

    const detailservices = services.find(service => service.id === Number(id))
  

    const history = useHistory()
    const goHomePage = () => {
        history.push('/services')
    }
    
    return (
        <div className="details">
            {/* service details */ }
            <h1 className="text-center my-5 heading">this service Details: {id}</h1>
            <div className="service-details">
                <div className="img">
                     <img src={ detailservices?.img } alt="" />
               </div>
                <div className="desc">
                    <h4>Name: { detailservices?.name }</h4>
                   <p>Details:- { detailservices?.desc }</p>
                   <h4>Visit:- {detailservices?.price} (Tk)</h4>
                </div>
            </div>
            
            <div className="btn-design">
                      <button onClick={goHomePage}>Previous Page</button>
                  </div>
        </div>
    );
};

export default Details;