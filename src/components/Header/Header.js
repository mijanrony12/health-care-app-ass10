import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'
const Header = () => {
    const {user,logOut}=useAuth()
    return (
        <div className="nav-menu">
               <div>
                    <h1>Prime <span>Hospital</span> Ltd</h1>
            </div>
            <div className="menu">
                 <NavLink to="/home">Home</NavLink>
                 <NavLink to="/services">Services</NavLink>
                <NavLink to="/doctors">Doctors</NavLink>
                {user.displayName}
                { user.email ?
                    <NavLink to="/login" onClick={logOut}>LogOut</NavLink>
                    :
                    <NavLink to="/login">Login</NavLink>
                 }
                 <NavLink to="/register">Register</NavLink>
            </div>
        </div>
    );
};

export default Header;