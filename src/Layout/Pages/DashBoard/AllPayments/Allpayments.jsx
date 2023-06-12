import React from 'react';
import useAxiosSecure from '../../../../Hooks/useAxiosSequre';
import { useQuery } from '@tanstack/react-query';
import { Helmet } from 'react-helmet-async';
import { FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
const Allpayments = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: managepayment = [], refetch } = useQuery(['managepayment'], async () => {
        const res = await axiosSecure.get('/allpayments')
        return res.data;
    })
    const handleDeletePayment = (singlePayment) => {
        Swal.fire({
            title: 'Are you sure this payment history delted?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://music-insuruments-learn-scholl.vercel.app/paymentdelet/${singlePayment?._id}`,{
                    method: 'DELETE',
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data?.deletedCount > 0){
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            ' payments details deletd succesfull',
                            'success'
                        )
                    }else{
                        console.log('nissan TMI KOTHAI');
                    }
                })                                
            }
        })
    };

    return (
        <div className="w-full mt-24 mb-24">
            <Helmet>
                <title>Melody Music/Dashbord/admin/MangePayments</title>
            </Helmet>
            <h3 className="text-3xl mt-16 mb-16 text-center font-semibold my-4">All Students Payments available here<span className="text-purple-600">({managepayment?.length})</span></h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-sm">
                            <th>#</th>
                            <th>class image</th>
                            <th>class name</th>
                            <th>Price</th>
                            <th>Instructor name</th>
                            <th>insructor email</th>
                            <th>student name</th>
                            <th>student email</th>
                            <th>enrol date</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            managepayment?.map((singlePayment, index) => <tr key={singlePayment?._id}>
                                <th>{index + 1}</th>
                                <th><img className='w-14 rounded-md' src={singlePayment?.image} alt="class image" /></th>
                                <td>{singlePayment?.classname}</td>
                                <td>${singlePayment?.price}</td>
                                <td>{singlePayment?.instructorname}</td>
                                <td>{singlePayment?.instructoremail}</td>
                                <td>{singlePayment?.studentNmae}</td>
                                <td>{singlePayment?.email}</td>
                                <td>{singlePayment?.date}</td>
                                <td><button onClick={() => handleDeletePayment(singlePayment)} className="btn btn-ghost bg-red-500  text-white " ><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default Allpayments;