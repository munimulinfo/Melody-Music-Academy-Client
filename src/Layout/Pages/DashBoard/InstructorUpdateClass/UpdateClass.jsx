import { useQuery } from '@tanstack/react-query';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAxiosSecure from '../../../../Hooks/useAxiosSequre';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';
const UpdateClass = () => {
    const lodedid = useParams();
    const { id } = lodedid;
    const [axiosSecure] = useAxiosSecure();
    const { data: singleclass = [], refetch } = useQuery(['singleclass'], async () => {
        const res = await axiosSecure.get(`/singleclass/${id}`)
        return res.data;
    });
    const { classname, image, price, seats } = singleclass;

    const { register, handleSubmit,reset, formState: { errors } } = useForm();
    const onSubmit = data => {
                    const { classname, price, seats, classimage } = data;
                    const updateItem = { classname, seats: parseInt(seats), price: parseFloat(price), image: classimage }
                    axiosSecure.put(`/allclass/${id}`, updateItem)
                        .then(data => {
                            reset();
                            refetch();
                            if (data.data?.modifiedCount) {
                                Swal.fire(
                                    'Good job!',
                                    'Your Class add succesfull',
                                    'success'
                                )
                            }
                            console.log('after add a new data', data.data);
                        })
                }
    return (
        <div className='px-32'>
            <Helmet>
            <title>Melody Music/Dashbord/Student/updateclass</title>
            </Helmet>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full  mt-24  shadow-xl mb-10 p-8 border border-purple-500 bg-white rounded-lg text-black">
                <h3 className='text-[25px] text-center font-semibold mb-5 text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Update the class information</h3>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Name</span>
                    </label>
                    <input type="text" defaultValue={classname} {...register("classname", { required: true })} placeholder="type here" className="input input-bordered" />
                    {errors.classname && <span className='text-purple-600 animate-pulse'>Class Name is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Class Image</span>
                    </label>
                    <input type="text" defaultValue={image} {...register("classimage")} placeholder='pasete imgbb link' className="input input-bordered" />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Available seats</span>
                    </label>
                    <input type="text" defaultValue={seats} {...register("seats", { required: true })} placeholder="type here" className="input input-bordered" />
                    {errors.seats && <span className='text-purple-600 animate-pulse'>Available Seats is required</span>}
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <input type="text" defaultValue={price} {...register("price", { required: true })} placeholder="type here" className="input input-bordered" />
                    {errors.price && <span className='text-purple-600 animate-pulse'>Price is required</span>}
                </div>
                <div className="form-control mt-6">
                    <input type="submit" value="Update Now" className="btn bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 border-0 text-white" />
                </div>
            </form>

        </div>
    );
};

export default UpdateClass;