import React, { useContext, useEffect, useState } from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSequre';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import useSilectClass from '../../../Hooks/useSelectClass';
import Swal from 'sweetalert2';
import useAdmin from '../../../Hooks/useAdmin';
import useInstructor from '../../../Hooks/useInstructor';
import { Helmet } from 'react-helmet-async';

const Classes = () => {
    const { user } = useContext(AuthContext);
    const [, refetch] = useSilectClass();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const navigate = useNavigate();
    const location = useLocation();
    const [axiosSecure] = useAxiosSecure();
    const { data: allclass = [] } = useQuery(['allclass'], async () => {
        const res = await axiosSecure.get('/allclasses')
        return res.data;
    });

    const aproved = allclass?.filter(classes => classes?.status === 'aproved');

    const handleSelectClass = (selectedClass, id) => {
        const { classname, image, instructoremail, instructorname, price, seats, _id, enroll } = selectedClass || {};
        if (user && user?.email) {
            const selectClass = { classname, image, instructoremail, email: user?.email, instructorname, price, seats, classid: _id, enroll, status: 'selected' };
            fetch('https://music-insuruments-learn-scholl.vercel.app/selectclass', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(selectClass)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.insertedId) {
                        refetch();
                        Swal.fire({
                            icon: 'success',
                            title: 'Class selected',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login and select this class',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now!'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    };
    return (
        <div className='px-8'>
            <Helmet>
                <title>Melody Music/Classes</title>
            </Helmet>
            <h1 className='text-3xl text-center mt-24 font-semibold font-sans'>All instructors classes are available here<span className='text-purple-500'>({aproved?.length})</span></h1>
            <div className='grid grid-cols-3 gap-10 mt-24 mb-24'>
                {
                    aproved?.map(aprovedClass => <div
                        key={aprovedClass?._id}
                        className="card card-compact w-full border border-purple-300  bg-base-100 drop-shadow-lg ">
                        <figure><img className='w-full h-64' src={aprovedClass?.image} alt="classimage" /></figure>
                        <div className="card-body">
                            <h2 className='text-lg font-semibold font-sans '>Class Name : {aprovedClass?.classname}</h2>
                            <p className='text-lg font-semibold font-sans '>Instructor name : {aprovedClass?.instructorname}</p>
                            <p className='text-lg font-semibold font-sans '>Available seats: {aprovedClass?.seats}</p>
                            <p className='text-lg font-semibold font-sans '>Price: ${aprovedClass?.price}</p>
                            <div className="card-actions justify-end">                             
                                {
                                     <button disabled={isAdmin || isInstructor } onClick={() => handleSelectClass(aprovedClass)} className="btn bg-purple-500 border-0 text-white ">Select</button>
                                }
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Classes;