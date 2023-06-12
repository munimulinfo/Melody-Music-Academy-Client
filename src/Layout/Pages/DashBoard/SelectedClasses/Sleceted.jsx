import React from 'react';
import useSilectClass from '../../../../Hooks/useSelectClass';
import { FaRegTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Sleceted = () => {
    const [selectclass, refetch] = useSilectClass();
    const navigate = useNavigate();
    const handleDeletSlectClass = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed){
                fetch(`https://music-insuruments-learn-scholl.vercel.app/selectclass/${id}`,{
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                       
                        if (data.deletedCount > 0){
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )      
                        }
                    })
            }
        })
    };


    return (
        <div className='mt-24'>
            <Helmet>
            <title>Melody Music/Dashbord/Student/selectclass</title>
            </Helmet>
            <h1 className=' text-3xl mb-16 text-center'>Your All Selected Classes<span className='text-purple-500'>({selectclass?.length})</span></h1>
            <div className="overflow-x-auto mb-16">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className='uppercase text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-sm'>
                            <th className=''>Sl</th>
                            <th>image</th>
                            <th>class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>price</th>
                            <th>Payment</th>
                            <th>delet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            selectclass?.map((singleclass, index) => <tr key={singleclass._id}>
                                <td className=' text-lg'>{index + 1}</td>
                                <td><img className='w-10 rounded' src={singleclass?.image} alt="class" /> </td>
                                <td>{singleclass?.classname}</td>
                                <td>{singleclass?.instructorname}</td>
                                <td>{singleclass?.instructoremail}</td>
                                <td>${singleclass?.price}</td>
                                <td><button onClick={ () => navigate(`/dashboard/payment/${singleclass?._id}`)} className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   rounded text-white p-2'>PAY</button></td>
                                <td><button onClick={() => handleDeletSlectClass(singleclass?._id)} className='bg-red-500 w-10 rounded text-white p-2'><FaRegTrashAlt className=' text-2xl' /></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sleceted;