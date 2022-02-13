import React, { Children } from 'react';
import { Oval } from 'react-loader-spinner';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, isLoading } = useAuth();
    let location = useLocation();
    if (isLoading) {
        <div className='flex justify-center align-middle mt-20'>
            <Oval
                heigth="100"
                width="100"
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