import React from 'react';
import { FaArrowAltCircleUp, FaCopyright, FaFacebook, FaGoogle, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-black mb-2 relative'>
      <div className='flex flex-col-reverse lg:flex-row  justify-center items-center gap-16 px-10 py-16 '>
        <div>
          <div className='flex flex-col lg:flex-row lg:gap-10 gap-5 '>
            <h1 className='text-lg text-white hover:text-purple-600'>Home</h1>
            <h1 className='text-lg text-white hover:text-purple-600'>About Us</h1>
            <h1 className='text-lg text-white hover:text-purple-600'>Our services</h1>
            <h1 className='text-lg text-white hover:text-purple-600'>News</h1>
            <h1 className='text-lg text-white hover:text-purple-600'>Our Clasess</h1>
            <h1 className='text-lg text-white hover:text-purple-600'>Contact us</h1>
          </div>
          <h1 className='flex text-center lg:justify-center lg:items-center mt-4 text-gray-300'>Melody Music Academy © 2023 All Rights Reserved</h1>
        </div>
        <div>
          <div className='flex gap-6 flex-col lg:flex-row'>
            <h1 className='p-4 text-2xl bg-white rounded text-purple-500 shadow drop-shadow-md hover:bg-purple-600 hover:text-white'><FaFacebook></FaFacebook></h1>
            <h1 className='p-4 text-2xl bg-white rounded text-purple-500 shadow drop-shadow-md hover:bg-purple-600 hover:text-white'><FaTwitter></FaTwitter></h1>
            <h1 className='p-4 text-2xl bg-white rounded text-purple-500 shadow drop-shadow-md hover:bg-purple-600 hover:text-white'><FaInstagram></FaInstagram></h1>
            <h1 className='p-4 text-2xl bg-white rounded text-purple-500 shadow drop-shadow-md hover:bg-purple-600 hover:text-white'><FaYoutube></FaYoutube></h1>
            <h1 className='p-4 text-2xl bg-white rounded text-purple-500 shadow drop-shadow-md hover:bg-purple-600 hover:text-white'><FaGoogle></FaGoogle></h1>
          </div>
        </div>
      </div>
    <button  className='absolute bottom-6 right-6 text-4xl text-purple-600 hover:text-red-600' title='go top'><FaArrowAltCircleUp></FaArrowAltCircleUp></button>
    </div>
  );
};
export default Footer;