import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import loginanimation from '../../../assets/119048-login-verification.json';
import { FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Providers/AuthProviders';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Login = () => {
    const [show, setShow] = useState();
    const handleShow = () => {
        setShow(!show);
    }
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const onSubmit = data => {
        const email = data?.email;
        const password = data?.password;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    icon: 'success',
                    title: 'Login successfully.',
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true });
            })
    };

    return (
        <div className='flex flex-col lg:flex-row justify-center items-center gap-10 px-10'>
            <div className='w-1/2 px-12'>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full  mt-32 mb-10 p-10 border border-purple-500 bg-white rounded-lg text-black">
                    <h3 className='text-2xl text-center font-bold mb-5'>Login Here</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                        {errors.email && <span className='text-purple-600 animate-pulse'>please provide your email</span>}
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={show ?'text':"password" } {...register("password", { required: true })} placeholder="password" className="input input-bordered" />
                        <span onClick={handleShow} className='absolute top-12 right-4 text-[22px]'>{show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                        {errors.password && <span className='text-purple-600 animate-pulse'>please provide your password</span>}

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