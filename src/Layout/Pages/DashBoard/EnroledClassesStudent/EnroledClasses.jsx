import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProviders';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../../Hooks/useAxiosSequre';

const EnroledClasses = () => {

    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: enrol = [], refetch } = useQuery(['enrol'], async () => {
        const res = await axiosSecure.get(`/enrolestudent/${user?.email}`)
        return res.data;
    });
    console.log(enrol);
    return (
        <div className='px-10 mt-24 mb-24'>
             <h1 className='text-center text-3xl mt-8 mb-16'>Your Enroll Classes Here<span className='text-purple-500'>({enrol?.length})</span></h1>
             <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-sm'>
                            <th>Sl</th>
                            <th>image</th>
                            <th>class Name</th>
                            <th>price</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>Date&Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                           enrol?.map((singlenroll, index) => <tr key={singlenroll._id}>
                                <td>{index + 1}</td>
                                <td><img className='w-10 rounded' src={singlenroll?.image} alt="class" /> </td>
                                <td>{singlenroll?.classname}</td>
                                <td>{singlenroll?.price}</td>   
                                <td>{singlenroll?.instructorname}</td>                
                                <td>{singlenroll?.instructoremail}</td>
                                <td>{singlenroll?.date}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            
        </div>
    );
};

export default EnroledClasses;