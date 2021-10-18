import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <h3>Please Register</h3>
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
                    <p>Already have an Account ? <Link to="/login">login</Link></p>

                    <button type="button" class="btn btn-outline-dark">Google Sign In</button>
                </div>
              </div>
        </div>
    );
};

export default Register;