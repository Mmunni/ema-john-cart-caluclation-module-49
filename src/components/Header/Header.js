import React, { useContext } from 'react';
import logo from '../../images/Logo.svg';
import './Header.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const Header = () => {
    const {user, logOut} = useContext(AuthContext)
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/shipping">Shipping</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
                {
                    user?.uid ?
                        <button onClick={logOut} className="btn-logout">Log Out</button>
                    :
                    <>
                        <Link to="/signin">SignIn</Link>
                        <Link to="/signup">SignUp</Link>
                    </>
                }
                

            </div>
        </nav>
    );
};

export default Header;