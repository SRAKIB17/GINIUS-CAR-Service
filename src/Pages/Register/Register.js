import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css'
const Register = () => {
    const handleSubmit = (event)=>{
        event.preventDefault()
        const email = event.target.email.value;
        const name = event.target.name.value;
        const password = event.target.password.value;
        console.log(event.target.email.value, event.target.name.value, event.target.password.value)
    }
    return (
        <div className='w-50 register'>
            <h1 className='text-center'>Please Register</h1>
            <form  onSubmit={handleSubmit}>
                <input type="text" name="name" id="" placeholder='Your Neme'/>
                <br />
                <input type="email" name="email" id="" placeholder='Your email' required/>
                <br />
                <input type="password" name="password" id="" placeholder='Password' required/><br />
                <input type="submit" value="Register" />
            </form>
            <p>Already register <Link to='/login' className='text-decoration-none'>Please Login</Link></p>
        </div>
    );
};

export default Register;