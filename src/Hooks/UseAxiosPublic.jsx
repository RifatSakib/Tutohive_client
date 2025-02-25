import React from 'react';
import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://tutorhive-two.vercel.app'
})

const UseAxiosPublic = () => {
    return axiosPublic;

};

export default UseAxiosPublic;