import React from 'react';
import Lottie from "lottie-react";
import aboutusanimation from '../../../../assets/144218-music-animation-13.json'
const Aboutus = () => {
    return (
        <div className='flex flex-col gap-5 lg:flex-row justify-center items-center lg:px-10 px-4 mb-16 lg:border py-4 lg:border-purple-500 rounded shadow lg:drop-shadow-lg'>

            <div className='flex justify-center lg:w-1/2 items-center'>
             
                    <Lottie className='w-full' animationData={aboutusanimation} loop={true} />;
              
            </div>
            <div className='flex flex-col justify-center items-center lg:w-1/2'>
                <h1 className='lg:text-6xl text-3xl  text-center font-extrabold font-sans'>How to Choose an Instrument</h1>
                <p className='text-center text-lg mt-2 mb-2'>MUSICAL INSTRUMENT</p>
                <p className='text-center mt-4 lg:text-[16px] mb-6'>
                    If you want to dip into the fascinating world of music but don`
                    t know how to play musical instruments and are unsure where to
                    start, you definitely need to contact us! Our experts provide
                    professional, practical,and theoretical music instructions that
                    will help you choose the right direction.
                </p>
                <button className='btn bg-purple-600 border-0 rounded-full text-white'>LEARN MORE</button>
            </div>

        </div>
    );
};

export default Aboutus;