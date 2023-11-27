import React from "react";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa6";
import { AuthContext } from "../../../Provider/AuthProvider";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const {GoogleSIgnIn} = useContext(AuthContext) 
    const axiosPublic = useAxiosSecure()
    const navigate = useNavigate()
    
  const handleGoogleLogin = () =>{
    GoogleSIgnIn()
    .then(res => {
        console.log(res);
        const userInfo = {
            email: res.user?.email,
            name: res.user?.displayName
        }
        axiosPublic.post('/users', userInfo)
        .then(res => {
            console.log(res.data);
            navigate('/')
        })
    })
    .catch(error => {
        console.error(error);
    })

  }
  return (
    <div>
      <button onClick={handleGoogleLogin} className="btn">
        Google
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocialLogin;
