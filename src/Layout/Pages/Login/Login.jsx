import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from "lottie-react";
import loginanimation from '../../../assets/119048-login-verification.json';
import { FaGoogle } from 'react-icons/fa';
const Login = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center gap-10 px-10'>
            <div className='w-1/2 px-12'>
                <form className="w-full  mt-32 mb-10 p-10 border border-purple-500 bg-white rounded-lg text-black">
                    <h3 className='text-2xl text-center font-bold mb-5'>Login Here</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <Link className="underline  text-error">Forgot password?</Link>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="flex gap-4 cursor-pointer mt-4">
                            <input type="checkbox" className="checkbox" />
                            <span className="label-text">Remember me</span>
                        </label>
                    </div>
                    <div className="form-control mt-6 mb-3">
                        <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white">Login</button>
                    </div>
                    {/* {error && <p className='text-center text-error mb-2'>{error}</p>} */}
                    <p className='text-center'>Don't have an account? <Link to='/signup' className='text-purple-600 underline'>Create an account</Link></p>
                </form>
                <div className='flex justify-center items-center gap-8 mb-24'>

                    <li className="btn btn-outline border-purple-500 w-full flex ">
                        <FaGoogle className='text-xl text-lime-400'></FaGoogle>
                        <Link>Google Login</Link>
                    </li>
                </div>
            </div>
            <div className='w-1/2 px-20 py-16'>
            <Lottie animationData={loginanimation} loop={true} />;
            </div>
            </div>

    );
};

export default Login;