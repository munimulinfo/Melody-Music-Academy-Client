import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProviders';
import useAxiosSecure from '../../../../Hooks/useAxiosSequre';
import { useQuery } from '@tanstack/react-query';
import { FaRegTrashAlt, FaUserCircle } from 'react-icons/fa';

const MyClasses = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    const { data: myclass = [] } = useQuery(['myclass'], async () => {
        const res = await axiosSecure.get(`/myclass/${user?.email}`)
        return res.data;
    })
    console.log(myclass);
    return (
        <div className='mt-16'>
            <h1></h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Sl</th>
                            <th>image</th>
                            <th>class Name</th>
                            <th>price</th>
                            <th>seats</th>
                            <th>status</th>
                            <th>update</th>
                            <th>delet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myclass.map((singleclass, index) => <tr key={singleclass._id}>
                                <td>{index + 1}</td>
                                <td><img className='w-12' src={singleclass?.image} alt="class" /> </td>
                                <td>{singleclass?.classname}</td>
                                <td>{singleclass?.price}</td>
                                <td>{singleclass.seats}</td>
                                <td>{singleclass.status}</td>
                                <td><button onClick={() => handleMakeAdmin(user?._id)} className='bg-yellow-600 w-10 rounded text-white p-2'><FaUserCircle className=' text-2xl' /></button></td>
                                <td> <button onClick={() => handleDeletItems(user?._id)} className='bg-red-500 w-10 rounded text-white p-2'><FaRegTrashAlt className=' text-2xl' /></button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyClasses;