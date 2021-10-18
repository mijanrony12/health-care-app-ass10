import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useServices from '../../Hooks/useServices';
import Service from '../Service/Service';

const Details = () => {
    const { id } = useParams()
    // const [ services ] = useServices()
    // console.log(services);
    const [ serviceDetail, setServiceDetail ] = useState([])
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
        .then(data=> setServiceDetail(data))
    }, [])
    console.log(serviceDetail);


    return (
        <div>
            <h1> this is details{ id }</h1>
            {
                serviceDetail.map(service=> <Service service={service}></Service>)
            }
        </div>
    );
};

export default Details;