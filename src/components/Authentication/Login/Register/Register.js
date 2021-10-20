import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import initialFirebase from '../../../../firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

initialFirebase()
const Register = () => {
const { signInUsingGoogle,handlePasswordEmailLogin,user,handleLogin,error } = useAuth();
    const [email, setEmail]=useState('')
  const [ password, setPassword ] = useState('');
 

    const handlePassword = e => {
      setPassword(e.target.value);
      console.log(e.target.value);
    }
    const handleEmail = e => {
      setEmail(e.target.value);
      
  }
  
  const handleRegister = (e) => {
    e.preventDefault()
    handlePasswordEmailLogin(email,password)
   
  }
  
  const handleLoginForm = (e) => {
    e.preventDefault()
    handleLogin(email,password)
  }
    return (
      <div className="form-desgin">

         {/* login and register foorm create */}
        {!user.email? <form onSubmit={handleRegister}>
                <h1>please Register</h1>
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
                          <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                      <div className="google">
                                  <p>Already have an Account ? <Link to="/login">login</Link></p>

                    <button onClick={signInUsingGoogle} type="button" class="btn btn-outline-dark">Google Sign In</button>
                </div>
        </form>
        
        :
        <form onSubmit={handleLoginForm}>
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
   <div className="btn-design">
            <button type="submit" className="btn btn-primary">Log In</button>   
  </div>
</form> }
        </div>
    );
};

export default Register;