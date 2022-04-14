import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const Sociallogin = () => {
    let signInWithGoogle;
    let user;
    let loading;
    let error;
    let signInWithGithub;

    [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    [signInWithGithub, user, loading, error] = useSignInWithGithub(auth);
    const navigate = useNavigate()
    let errElement;
    if (error) {
        errElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }
    if (loading) {
        errElement = <p>Loading...</p>;
    }
    if (user) {
        navigate('/')
    }
    return (
        <>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
                <p className='m-1'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
            </div>
            {errElement}
            <button onClick={() => signInWithGoogle()} className='btn btn-info rounded w-100 text-light m-1'><img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png" width="32" alt="google logo png webinar optimizing for success google business webinar" />Log with Google</button>
            <button className='btn btn-warning rounded w-100 text-light m-1'>Log with  Facebook</button>
            <button className='btn btn-info rounded w-100 text-light m-1' onClick={()=>signInWithGithub()}>Log with GitHub</button>

        </>
    );
};

export default Sociallogin;