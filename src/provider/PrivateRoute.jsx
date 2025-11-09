import React, { use } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router';
import Loading from '../components/Loading/Loading';

const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext)
    // console.log(user)
    const location = useLocation();
    // console.log(location)

    if (loading) {
        return <Loading></Loading>
    }

    // if --> user is valid then return children
    if (user && user?.email) {
        return children;
    }
    // user not valid then navigate Login
    return <Navigate state={location.pathname} to="/auth/login"></Navigate>

};

export default PrivateRoute;