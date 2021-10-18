import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div className="nav-menu">
               <div>
                    <h1>Prime <span>Hospital</span> Ltd</h1>
            </div>
            <div className="menu">
                 <NavLink to="/home">Home</NavLink>
                 <NavLink to="/services">Services</NavLink>
                 <NavLink to="/doctors">Doctors</NavLink>
                 <NavLink to="/home">Home</NavLink>
            </div>
        </div>
    );
};

export default Header;