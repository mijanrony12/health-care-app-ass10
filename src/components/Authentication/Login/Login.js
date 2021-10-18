import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
const Login = () => {
    return (
        <div className="login-form">
            <div>
                <h3>Please login</h3>
                      <div>
                        <label htmlFor="email">Email</label><br />
                        <input type="email" placeholder="Your Email" required />
                      </div>
                      <div>
                        <label htmlFor="password">password</label><br />
                        <input type="password" placeholder="Your Password" required />
                   </div>
                    <div className="btn-design">
                        <button>Login</button>
                </div>
                <div className="google">
                    <p>Are you new ? <Link to="/register">Register</Link></p>

                    <button type="button" class="btn btn-outline-dark">Google Sign In</button>
                </div>
              </div>
        </div>
    );
};

export default Login;