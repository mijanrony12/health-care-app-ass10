import React, { useState } from 'react';
import { Link,useLocation,useHistory } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Login.css'
const Login = () => {
    const { signInUsingGoogle, error,handleLogin } = useAuth();
const [email, setEmail]=useState('')
    const [ password, setPassword ] = useState('')

    const location = useLocation()
    const history = useHistory()
    const redirect_uri=location.state?.from || '/'

    const handleGoogleLogin = () => {
        signInUsingGoogle()
         .then(result => {
            history.push(redirect_uri)
            })
    }

    const handlePassword = e => {
        setPassword(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value);
        console.log(e.target.value)
    }

    const ensureLogin = (e) => {
        e.preventDefault()
        handleLogin(email, password)
        console.log(email,password);
}
    return (
      <div className="form-desgin">
      {/* login form create */}
          <form onSubmit={ensureLogin}>
          <h1>please Login</h1>
                    <div className="row mb-3">
                      <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                      <div className="col-sm-10">
                        <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail3"/>
                      </div>
                    </div>
                    <div className="row mb-3">
                      <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                      <div className="col-sm-10">
                        <input onBlur={handlePassword} type="password" className="form-control" id="inputPassword3"/>
                      </div>
                    </div>
                  
                    <div className="row mb-3">
                      <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                          <label className="form-check-label" for="gridCheck1">
                            Example checkbox
                          </label>
                        </div>
                      </div>
                      </div>
                          <div>
                              <p className="text-danger">{ error}</p>
                            </div>
                      <div className="btn-design">
                          <button type="submit" className="btn btn-primary">Login</button>
                      </div>
                           <div className="google">
                                <p>Are You New ? <Link to="/register">register</Link></p>

                         <button onClick={handleGoogleLogin} type="button" className="btn btn-outline-dark">Google Sign In</button>
                    </div>
        </form>
        </div>
    );
};

export default Login;