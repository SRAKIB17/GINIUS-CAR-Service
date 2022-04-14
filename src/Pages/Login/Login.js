
import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Sociallogin from '../SocialLogin/Sociallogin';

const Login = () => {
    const loaction = useLocation()
    const from = loaction.state?.from?.pathname || '/'
   
    const emailRef = useRef('');
    const navigate = useNavigate()
    const passwordRef = useRef('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth)
    const handleSubmit = event =>{
        event.preventDefault()
        const email = emailRef.current.value; 
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
    
    let errMSG;
    if(error){
        errMSG = error.message
    }
    if(user){
        navigate(from)
    }
    const handleResetPass = async ()=>{
        const email = emailRef.current.value;
        await sendPasswordResetEmail(email)
        .then(()=>alert('send link on email'))
    }
    return (
        <div className='container w-25 mx-auto'>
            <h2 className='text-primary text-center m-4'>Please Login</h2>
            {errMSG}
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required/>
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required/>
                </Form.Group>
               
                <Button className='w-100' variant="primary" type="submit" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form>
            <p>New to Genius Car <Link className='text-danger pe-auto text-decoration-none' to='/register' state={{from: loaction}}>Please register</Link></p>
            <p>Forget password ? <button className='text-danger pe-auto text-decoration-none' onClick={()=>handleResetPass()}>Reset password</button></p>
            <Sociallogin></Sociallogin>

        </div>
    );
};

export default Login;