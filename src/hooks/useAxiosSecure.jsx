import React from 'react';

const axiosSecure = axios.create({
    baseUrl: 'http://localhost:5000'
})
const useAxiosSecure = () => {
    return axiosSecure
};

export default useAxiosSecure;