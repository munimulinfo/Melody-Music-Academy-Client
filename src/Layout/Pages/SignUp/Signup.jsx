import React, { useContext, useState } from 'react';
import Lottie from "lottie-react";
import signupanimation from '../../../assets/105639-signup.json'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
const Signup = () => {
    // password visible or hidden function implement
    const [show, setShow] = useState(false);
    const [shows, setShows] = useState(false);
    const handlevisiblepaswordfirst = () => {
        setShows(!shows);
    }
    const handlevisiblepasword = () => {
        setShow(!show);
    }

    // user registration from handle react hook form and save data on server 
    const [error, setError] = useState("");
    const [mistake, setMistake] = useState("");
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();
    const onSubmit = data => {
        if (data.password == data.confrimpassword) {
            createUser(data.email, data.password)
                .then(result => {
                    const loggedUser = result.user;
                    console.log(loggedUser);
                    updateUserProfile(data.name, data.photoURL)
                        .then(() => {
                            const saveUser = { name: data.name, email: data.email }
                            fetch('http://localhost:5000/users', {
                                method: 'POST',
                                headers: {
                                    'content-type': 'application/json'
                                },
                                body: JSON.stringify(saveUser)
                            })
                                .then(res => res.json())
                                .then(data => {
                                    console.log(data);
                                    if (data.insertedId) {
                                        reset();
                                        Swal.fire({
                                            position: 'top-end',
                                            icon: 'success',
                                            title: 'User created successfully.',
                                            showConfirmButton: false,
                                            timer: 1500
                                        });
                                        navigate('/');
                                    }
                                })
                        })
                        .catch(error => {
                            setMistake(error.message);
                        })
                })
        } else {
            setError('worng password re type your pasword');
        }
    };
    return (
        <div className='flex flex-col lg:flex-row justify-center items-center gap-10 px-10'>

            <div className='w-full lg:px-16'>
                <form onSubmit={handleSubmit(onSubmit)} className="w-full  mt-32  shadow-xl mb-10 p-8 border border-purple-500 bg-white rounded-lg text-black">
                    <h3 className='text-2xl text-center font-bold mb-5'>Sign up now!</h3>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" {...register("name", { required: true })} placeholder="type here" className="input input-bordered" />
                        {errors.name && <span className='text-purple-600 animate-pulse'>Name is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo</span>
                        </label>
                        <input type="text" {...register("photoURL", { required: true })} placeholder="add a photo" className="input input-bordered" />
                        {errors.photoURL && <span className='text-purple-600 animate-pulse'>Photo is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" {...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                        {errors.email && <span className='text-purple-600 animate-pulse'>email is required</span>}
                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type={shows ? 'text' : "password"} {...register("password", { required: true, pattern: /(?=.*[A-Z])/, minLength: 6, })} placeholder="password" className="input input-bordered" />
                        <span onClick={handlevisiblepaswordfirst} className='absolute top-12 right-4 text-[22px]'>{shows ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase.</p>}

                    </div>
                    <div className="form-control relative">
                        <label className="label">
                            <span className="label-text">Confrim Password</span>
                        </label>
                        <input type={show ? 'text' : "password"} {...register("confrimpassword", { required: true })} placeholder="Re type password" className="input input-bordered" ></input>
                        <span onClick={handlevisiblepasword} className='absolute top-12 right-4 text-[22px]'>{show ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}</span>
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {error && <p className='text-error mb-2'>{error}</p>}
                    </div>                  
                    <div className="form-control mt-6">
                        <input type="submit" value="Sign Up" className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white" />
                    </div>
                    {mistake && <p className='text-center text-error mb-2'>{mistake}</p>}
                </form>
            </div>
            <div className='w-full px-6 pt-36'>
                <Lottie animationData={signupanimation} loop={true} />;
            </div>

        </div>
    );
};

export default Signup;