import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';

const Register = () => {
const { signInUsingGoogle, error } = useAuth();
    const [email, setEmail]=useState('')
const [password, setPassword]=useState('')
    const handlePassword = e => {
        setEmail(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
    }
    return (
        <div className="login-form">
            <div>
                <h3>Please Register</h3>
                      <div>
                        <label htmlFor="email">Email</label><br />
                        <input onBlur={handleEmail} type="email" placeholder="Your Email" required />
                      </div>
                      <div>
                        <label htmlFor="password">password</label><br />
                        <input onBlur={handlePassword} type="password" placeholder="Your Password" required />
                </div>
                  <div>
                    <p className="text-danger">{ error}</p>
                  </div>
                    <div className="btn-design">
                        <button>Login</button>
                </div>
                <div className="google">
                    <p>Already have an Account ? <Link to="/login">login</Link></p>

                    <button onClick={signInUsingGoogle} type="button" class="btn btn-outline-dark">Google Sign In</button>
                </div>
              </div>
        </div>
    );
};

export default Register;