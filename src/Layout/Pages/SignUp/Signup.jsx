import React, { useContext } from 'react';
import Lottie from "lottie-react";
import signupanimation from '../../../assets/105639-signup.json'
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Signup = () => {

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const { createUser, updateUserProfile } = useContext(AuthContext);
    const navigate = useNavigate();

    const onSubmit = data => {
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
                .catch(error => console.log(error))
        })
        console.log(data);
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" {...register("password", { required: true, pattern: /(?=.*[A-Z])/, minLength: 6, })} placeholder="password" className="input input-bordered" />
                        {errors.password?.type === 'required' && <p className="text-red-600">Password is required</p>}
                        {errors.password?.type === 'minLength' && <p className="text-red-600">Password must be 6 characters</p>}
                        {errors.password?.type === 'pattern' && <p className="text-red-600">Password must have one Uppercase.</p>}

                    </div>
                    <div className="form-control">
                        <label className="flex gap-4 cursor-pointer mt-4">
                            <input type="checkbox" className="checkbox" required/>
                            <span className="label-text">Remember me</span>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" value="Sign Up" className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white"/>
                    </div>
                    {/* {error && <p className='text-center text-error mb-2'>{error}</p>} */}
                </form>
            </div>
            <div className='w-full px-6 pt-36'>
                <Lottie animationData={signupanimation} loop={true} />;
            </div>

        </div>
    );
};

export default Signup;