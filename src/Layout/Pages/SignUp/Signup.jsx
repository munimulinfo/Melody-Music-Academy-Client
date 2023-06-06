import React from 'react';
import Lottie from "lottie-react";
import signupanimation from '../../../assets/105639-signup.json'
const Signup = () => {
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center gap-10 px-10'>
           
            <div className='w-full lg:px-16'>
                <form className="w-full  mt-32  shadow-xl mb-10 p-8 border border-purple-500 bg-white rounded-lg text-black">
                    <h3 className='text-2xl text-center font-bold mb-5'>Sign up now!</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" name='email' placeholder="add a photo" className="input input-bordered" required />
                    </div>
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
                       
                    </div>
                    <div className="form-control">
                        <label className="flex gap-4 cursor-pointer mt-4">
                            <input type="checkbox" className="checkbox" required />
                            <span className="label-text">Remember me</span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white">Sign Up</button>
                    </div>
                    {/* {error && <p className='text-center text-error mb-2'>{error}</p>} */}
                </form>
            </div>
            <div className='w-full lg:px-10 pt-36'>
                <Lottie animationData={signupanimation} loop={true} />;
            </div>

        </div>
    );
};

export default Signup;