import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Providers/AuthProviders';

const AddClass = () => {
    const {user} = useContext(AuthContext);
    console.log(user);
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
     
        reset()
    }
    return (
        <div className='px-32'>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full  mt-24  shadow-xl mb-10 p-8 border border-purple-500 bg-white rounded-lg text-black">
                <h3 className='text-[25px] text-center font-semibold mb-5 text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Enter the class information here</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Name</span>
                    </label>
                    <input type="text" {...register("classname", { required: true })} placeholder="type here" className="input input-bordered" />
                    {errors.classname && <span className='text-purple-600 animate-pulse'>Class Name is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Image</span>
                    </label>
                    <input type="file" {...register("classimage", { required: true })}  className="file-input file-input-bordered file-input-primary w-full" />
                    {errors.classimage && <span className='text-purple-600 animate-pulse'>Class Image is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor name</span>
                    </label>
                    <input type="text" defaultValue={user?.displayName} {...register("instructorname", { required: true })} readOnly className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Instructor Email</span>
                    </label>
                    <input type="email" defaultValue={user?.email} {...register("instructoremail", { required: true })} readOnly className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available seats</span>
                    </label>
                    <input type="text" {...register("seats", { required: true })} placeholder="type here" className="input input-bordered" />
                    {errors.seats && <span className='text-purple-600 animate-pulse'>Available Seats is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" {...register("price", { required: true })} placeholder="type here" className="input input-bordered" />
                    {errors.price && <span className='text-purple-600 animate-pulse'>Price is required</span>}
                </div>
                <div className="form-control mt-6">
                        <input type="submit" value="Add Class" className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white" />
                    </div>
            </form>

        </div>
    );
};

export default AddClass;