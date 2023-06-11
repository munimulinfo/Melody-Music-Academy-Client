import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProviders';
import useAxiosSecure from '../../../../Hooks/useAxiosSequre';
import { useQuery } from '@tanstack/react-query';
import { FaRegTrashAlt, } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: myclass = [], refetch } = useQuery(['myclass'], async () => {
        const res = await axiosSecure.get(`/myclass/${user?.email}`)
        return res.data;
    });
    const navigate = useNavigate();
    const handleDeletClass = (id) => {
        Swal.fire({
            title: 'Are you sure this class was delted?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/allclass/${id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {

                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'this class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    };

    return (
        <div className='mt-16'>
            <Helmet>
                <title>Melody Music/Dashbord/myclases</title>
            </Helmet>
            <h1 className='text-center text-3xl mt-8 mb-16'>Your All Add Classes Here<span className='text-purple-500'>({myclass?.length})</span></h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className='text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-sm'>
                            <th>Sl</th>
                            <th>image</th>
                            <th>class Name</th>
                            <th>price</th>
                            <th>seats</th>
                            <th>status</th>
                            <th>enroll</th>
                            <th>update class</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myclass?.map((singleclass, index) => <tr key={singleclass._id}>
                                <td>{index + 1}</td>
                                <td><img className='w-10 rounded' src={singleclass?.image} alt="class" /> </td>
                                <td>{singleclass?.classname}</td>
                                <td>{singleclass?.price}</td>
                                <td>{singleclass?.seats}</td>
                                <td className={singleclass.status === 'pending' ? 'text-red-500 text-[18px] text-bold animate-pulse' : 'text-green-600 text-[18px] text-bold'}>{singleclass.status}</td>
                                <td>{singleclass?.enroll}</td>
                                <td><button onClick={() => navigate(`/dashboard/updateclass/${singleclass?._id}`)} className='bg-purple-600  rounded text-white p-2'>update</button></td>
                                <td> <button onClick={() => handleDeletClass(singleclass?._id)} className='bg-red-500 w-10 rounded text-white p-2'><FaRegTrashAlt className=' text-2xl' /></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;