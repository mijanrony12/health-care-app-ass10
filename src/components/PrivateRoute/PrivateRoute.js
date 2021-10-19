import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hooks/useAuth';

// create a protected route
const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth()
    if (isLoading)
    {
        return <Spinner animation="border" variant="secondary" />
    }
    return (
        <Route
            { ...rest }
            render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
        >
              
        </Route>
    );
};

export default PrivateRoute;