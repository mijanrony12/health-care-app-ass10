import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Header.css'
const Header = () => {
    const { user, logOut } = useAuth();

    const navStyle = {
        color: '#ee5a24',
    }
    return (
        <div className="nav-menu" sticky="top">
               <div>
                    <h1>Prime <span>Hospital</span> Ltd</h1>
            </div>
            {/* menu bar create */}
            <div className="menu">
                 <NavLink activeStyle={navStyle} to="/home">Home</NavLink>
                 <NavLink activeStyle={navStyle} to="/services">Services</NavLink>
                <NavLink activeStyle={navStyle} to="/doctors">Doctors</NavLink>
                <NavLink activeStyle={navStyle} to="/car">Our Car</NavLink>
                
                {user.displayName}
                { user.email ?
                    <NavLink activeStyle={navStyle} to="/login" onClick={logOut}>LogOut</NavLink>
                    :
                    <NavLink activeStyle={navStyle} to="/login">Login</NavLink>
                 }
                 <NavLink activeStyle={navStyle} to="/register">Register</NavLink>
            </div>
        </div>
    );
};

export default Header;