import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import './SignIn.css';

const SignIn = () => {
     const {signIn} = useContext(AuthContext);
     
     const navigate = useNavigate();
     const location = useLocation();
     const from = location.state?.from?.pathname || "/";

    const handelSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then(result => {
            const user = result.user;
            form.reset('');
            navigate(from, {replace: true});
            
        })
        .catch(error => {
            console.log(error)
        })
    }
    return (
        <div>
            <div className="container">
                    <h1 className='form-title'>Sign In</h1>
                    <form onSubmit={handelSignIn}>
                       <div className="form-control">
                       <label htmlFor="email">Email </label>
                       <input type="email" name="email" id="" placeholder='Enter your email' required/>
                       </div>
                       <div className="form-control">
                         <label htmlFor="password">Password </label>
                       <input type="password" name="password" id="" placeholder='Enter password' required/><br></br>
                       </div>
                        <button className='submit-btn' type='submit'>LogIn</button>
                        <p><small>new to Ema-Jhon <Link to ='/signup'> Create an account</Link></small></p>
                      
                    </form>
                </div>
        </div>
    );
};

export default SignIn;