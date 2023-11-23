import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import {Navigate} from 'react-router'

const PrivateRouter = ({children}) => {
    const {user, loading} = useContext(AuthContext)

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
    return <Navigate to='/login'></Navigate>
};

export default PrivateRouter;