import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import './Register.css'

import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Sociallogin from '../SocialLogin/Sociallogin';


const Register = () => {
    const navigate = useNavigate()

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

    const [updateProfile, updating,updateError] = useUpdateProfile(auth);

    const [agree, setAgree] = useState(false)
    const handleSubmit = async event => {
        event.preventDefault()
        const email = event.target.email.value;
        const name = event.target.name.value;
        const password = event.target.password.value;
        // const agree = event.target.terms.checked 
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({displayName:name})
        console.log('update profile')
        navigate('/')

    }


    if (user) {
        console.log(user)
        navigate('/') 
    }
    return (
        <div className='w-50 register'>
            <h1 className='text-center'>Please Register</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"  placeholder='Your Neme' />
                <br />
                <input type="email" name="email" placeholder='Your email' required />
                <br />
                <input type="password" name="password" placeholder='Password' required /><br />
                <label className={agree ? 'text-primary' : 'text-danger'} htmlFor="terms">Accept terms and conditon</label>
                <input type="checkbox" onClick={() => setAgree(!agree)} name="terms" id="terms" style={{ margin: '10px' }} />
                <br />

                <input
                    disabled={!agree}
                    type="submit" value="Register" className='btn bg-primary' />
            </form>
            <Sociallogin></Sociallogin>
            <p>Already register <Link to='/login' className='text-decoration-none'>Please Login</Link></p>
        </div>
    );
};

export default Register;