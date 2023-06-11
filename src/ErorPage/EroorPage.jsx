import React from 'react';
import Lottie from "lottie-react";
import eroranimation from '../assets/29894-error-404-page.json'
import { useNavigate } from 'react-router-dom';
const EroorPage = () => {
    const nevigate = useNavigate();
    return (
        <div className='w-1/2 flex-col flex justify-center items-center mx-auto relative'>
            <Lottie className='w-full' animationData={eroranimation} loop={true} />;
            <button onClick={nevigate('/')} className='btn btn-primary absolute bottom-0 mb-5'>Back To Home</button>
        </div>
    );
};

export default EroorPage;