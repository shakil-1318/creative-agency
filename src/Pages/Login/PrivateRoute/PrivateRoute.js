import React from 'react';
import { Oval } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        return
        <div class='flex justify-center align-middle'>
            <Oval
                color='grey'
                ariaLabel='loading'
            />
        </div>
    }
    if (user.email) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;