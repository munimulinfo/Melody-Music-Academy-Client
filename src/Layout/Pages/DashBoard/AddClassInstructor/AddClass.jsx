import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../../Providers/AuthProviders';
import useAxiosSecure from '../../../../Hooks/useAxiosSequre';
import Swal from 'sweetalert2';
const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddClass = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.classimage[0])
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageResponse => {
                console.log(imageResponse);
                if (imageResponse.success) {
                    const imgURL = imageResponse.data.display_url;
                    const { classname, instructoremail, instructorname, price, seats } = data;
                    const newItem = { classname, instructoremail, instructorname, seats: parseInt(seats), price: parseFloat(price), image: imgURL, status: 'pending', enroll: 0, userImage: user?.photURL }
                    console.log(newItem);
                    axiosSecure.post('/allclass', newItem)
                        .then(data => {
                            reset();
                            if (data.data?.insertedId) {
                                Swal.fire(
                                    'Your Class add succesfull',
                                    'success'
                                )
                            }
                            console.log('after add a new data', data.data);
                        })
                }
            })
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
                    <input type="file" {...register("classimage", { required: true })} className="file-input file-input-bordered file-input-primary w-full" />
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