import React from 'react';
import './Error.css'
import error from '../../image/error.png'
import { useHistory } from 'react-router';
const Error = () => {

    const history = useHistory()
    const goHomePage = () => {
        history.push('/')
    }
    return (
        <div className="error">
               <div>
                     {/* create a error page */}
                    <img src={ error } alt="" />
                   <div className="btn-design">
                      <button onClick={goHomePage}>Previous Page</button>
                  </div>
               </div>
        </div>
    );
};

export default Error;