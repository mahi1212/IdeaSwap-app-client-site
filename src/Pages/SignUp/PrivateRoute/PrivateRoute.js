import React from 'react';
import useAuth from './../../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const { user} = useAuth();
    let location = useLocation();
    if (user.email) {
        return children;
    }
    return <Navigate to="/signIn" state={{ from: location.pathname }} />;
};

export default PrivateRoute;