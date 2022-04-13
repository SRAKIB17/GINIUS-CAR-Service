import React from 'react';
import { useParams } from 'react-router-dom';

const ServicesDetails = () => {
    const {serviceId} = useParams()
    
    return (
        <div>
            <h1 style={{textAlign:'center'}}>Welcome Service Details id: {serviceId}</h1>
        </div>
    );
};

export default ServicesDetails;