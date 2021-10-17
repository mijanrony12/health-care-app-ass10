import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div className="footer-section">
            <div>
                <h2>Our Parmanent Address</h2>
                <p><i class="fas fa-map-marker-alt"></i> <span>Chowmuhoni Chowrasta,</span> <br /> <span>Begumgonj, Noakhali</span> </p>
                <p><i class="far fa-envelope"></i> <span> <Link>primehospital12@gmail.com</Link> </span></p>
                <p><i class="fas fa-phone"></i> <span>01313789001, 01313789002</span></p>
            </div>
            <div className="social">
                <div >
                      <h3>Social Network</h3>
                        <p>
                            <i class="fab fa-facebook-square"></i>
                            <i class="fab fa-instagram-square"></i>
                        </p>
                   </div>
                  <div>
                        <p>
                            <i class="fab fa-twitter-square"></i>
                            <i class="fab fa-google-plus-square"></i>
                        </p>
                   </div>
             </div>
        </div>
    );
};

export default Footer;