

import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import Sociallogin from '../SocialLogin/Sociallogin';


import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const loaction = useLocation()
    const from = loaction.state?.from?.pathname || '/'

    const emailRef = useRef('');
    const navigate = useNavigate()
    const passwordRef = useRef('');
    var [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth)
    const handleSubmit = event => {
        event.preventDefault()
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    let errMSG;
    [user, loading] = useAuthState(auth)
    if (error) {
        errMSG = error.message
    }
    if (loading) {
        return (<Loading></Loading>)
    }
    if (user) {
        navigate(from)
    }
    const handleResetPass = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email)

            .then(() => toast('send link on email'))
        }
        else{
            toast('please provide email')
        }
        
    }
return (
    <div className='container w-25 mx-auto'>

        <h2 className='text-primary text-center m-4'>Please Login</h2>
        {errMSG}
       
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">

                <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">

                <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
            </Form.Group>

            <Button className='w-100' variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
        <p>New to Genius Car <Link className='text-danger pe-auto text-decoration-none btn' to='/register' state={{ from: loaction }}>Please register</Link></p>
        <p>Forget password ? <button className='text-danger pe-auto text-decoration-none btn' onClick={() => handleResetPass()}>Reset password</button></p>
        <Sociallogin></Sociallogin>
        <ToastContainer />
    </div>
);
};



export default Login;