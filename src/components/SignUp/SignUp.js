import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import './SignUp.css';

const SignUp = () => {
    const [error, setError] = useState(null)
    const {createUser} = useContext(AuthContext);

    const handelSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confimPassword = form.confimPassword.value
        console.log(email, password, confimPassword);
        if(password.length < 6){
            setError('Password length should be 6 cherectar')
            return
        }
        if(password !== confimPassword){
            setError('password and confirm-password did not match');
            return;
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            form.reset('')
            console.log(user)
        })
        .catch(error => 
            {console.error(error)
        })
    }
    return (
        <div>
           <div className="container">
                    <h1 className='form-title'>Sign Up</h1>
                    <form onSubmit={handelSignUp}>
                       <div className="form-control">
                       <label htmlFor="email">Email </label>
                       <input type="email" name="email" id="" placeholder='Enter your email' required/>
                      
                       </div>
                       <div className="form-control">
                         <label htmlFor="password">Password </label>
                       <input type="password" name="password" id="" placeholder='Enter password' required/>
                       
                       </div>
                       <div className="form-control">
                         <label htmlFor="confimPassword">Confirm Password </label>
                       <input type="password" name="confimPassword" id="" placeholder='Confirm password' required/>
                       
                       </div>
                        <button className='submit-btn' type='submit'>Sign Up</button>
                        <p><small>Aleady have an account <Link to ='/signin'>Login</Link></small></p>
                        <small className='text-error'>{error}</small>
                    </form>
                </div>
        </div>
    );
};

export default SignUp;