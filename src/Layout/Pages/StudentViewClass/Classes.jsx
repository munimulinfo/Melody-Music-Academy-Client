import React from 'react';
import useAxiosSecure from '../../../Hooks/useAxiosSequre';
import { useQuery } from '@tanstack/react-query';

const Classes = () => {

    const [axiosSecure] = useAxiosSecure();
    const { data: allclass = [], refetch } = useQuery(['allclass'], async () => {
        const res = await axiosSecure.get('/allclasses')
        return res.data;
    })
    const aproved = allclass?.filter(classes => classes?.status === 'aproved');
    console.log(aproved);

    return (
        <div>
            <h1 className='text-3xl text-center mt-24 font-semibold font-sans'>All instructor classes are available here.</h1>
            <div className='grid grid-cols-3 gap-10 mt-24 mb-24'>
                {
                    aproved?.map(aprovedClass => <div
                        key={aprovedClass?._id}
                        className="card card-compact w-full h-[400px] bg-base-100 drop-shadow-lg ">
                        <figure><img className='w-full' src={aprovedClass?.image} alt="classimage" /></figure>
                        <div className="card-body">
                            <h2 className='text-lg font-semibold font-sans '>Class Name : {aprovedClass?.classname}</h2>
                            <p className='text-lg font-semibold font-sans '>Instructor name : {aprovedClass?.instructorname}</p>
                            <p className='text-lg font-semibold font-sans '>Available seats: {aprovedClass?.seats}</p>
                            <p className='text-lg font-semibold font-sans '>Price: ${aprovedClass?.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn bg-gradient-to-r text-white from-rose-400 via-fuchsia-500 to-indigo-500">Book now</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Classes;