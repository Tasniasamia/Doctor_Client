import React, { useContext } from 'react';
import { authdataall } from './Shared/AuthProvider';
import { NavLink, Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,load}=useContext(authdataall);
    let location = useLocation();
    if(user){
        return children;
    }
    if(load){
        <div>Loading.....</div>
    }
    return (
        <Navigate to="/login" state={{ from: location }} replace />
            
        
    );
};

export default PrivateRoute;