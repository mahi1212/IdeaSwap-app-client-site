import React from 'react';
import useAuth from './../../../hooks/useAuth';
import { Navigate, useLocation } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    // End of auto reload after refreshing
    if(isLoading){
        return <CircularProgress />
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/signIn" state={{ from: location.pathname }} />;
};

export default PrivateRoute;