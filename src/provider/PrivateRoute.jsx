import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router';

const PrivateRoute = ({ children }) => {
    const { user } = use(AuthContext)
    console.log(user)

    // if --> user is valid then return children
    if (user && user?.email) {
        return children;
    }
    // user not valid then navigate Login
    return <Navigate to="/auth/login"></Navigate>
    
};

export default PrivateRoute;