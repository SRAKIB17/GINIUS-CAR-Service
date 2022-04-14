import React from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const ServicesDetails = () => {
    const {serviceId} = useParams()
    const navigate = useNavigate()
    const checkout = (id)=>{
        navigate(id)
    }
    return (
        <div className='text-center'>
            <h1 style={{textAlign:'center'}}>Welcome Service Details id: {serviceId}</h1>
            <button className='btn btn-primary' onClick={()=>checkout('/checkout/'+serviceId)}>CheckProcced</button>
        </div>
    );
};

export default ServicesDetails;