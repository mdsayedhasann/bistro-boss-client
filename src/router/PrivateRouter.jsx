import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import {Navigate} from 'react-router'
import { useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const location = useLocation()

    if(loading){
       
        return <>
         <div className='flex justify-center items-center'>
        <progress className="progress w-56"></progress>
        </div>
        </>
    }
    if(user){
        return children
    }
    return <Navigate to='/login' state={{from: location}} replace></Navigate>
};

export default PrivateRouter;