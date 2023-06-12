import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../Hooks/useAxiosSequre";
import { Helmet } from "react-helmet-async";

const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;
    })

    const handleMakeAdmin = user => {
        fetch(`https://music-insuruments-learn-scholl.vercel.app/users/admin/${user._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} is an Admin Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    }
    const handleMakeinstructor = user => {
        fetch(`https://music-insuruments-learn-scholl.vercel.app/users/instructor/${user?._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: `${user?.name} is an instructor Now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            });
    };

    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure this user was delted?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed){
                fetch(`https://music-insuruments-learn-scholl.vercel.app/users/${user?._id}`, {
                    method: 'DELETE',
                }).then(res => res.json())
                  .then(data => {
                        if (data?.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                ' user deletd succesfull',
                                'success'
                            )
                        }                      
                    })
            }
        })
    };

    return (
        <div className="w-full mt-24 mb-24 lg:px-8">
            <Helmet>
                <title>Melody Music/Dashbord/admin/MangeUser</title>
            </Helmet>
            <h3 className="text-3xl mt-16 mb-16 text-center font-semibold my-4">All users are available here<span className="text-purple-600">({users.length})</span></h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    {/* head */}
                    <thead>
                        <tr className="text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  text-sm">
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Instructor</th>
                            <th>Make Admin</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role === 'instructor' ? <button className="btn" disabled="disabled"><FaUserShield></FaUserShield></button> : <button onClick={() => handleMakeinstructor(user)} className="btn  bg-purple-600  text-white"><FaUserShield></FaUserShield></button>}</td>
                                <td>{user.role === 'admin' ? <button className="btn" disabled="disabled"><FaUserShield></FaUserShield></button> :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-pink-500  text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                                <td>{user.role === 'admin' ? <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-500  text-white " disabled="disabled" ><FaTrashAlt></FaTrashAlt></button> : <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-500  text-white"><FaTrashAlt></FaTrashAlt></button>}</td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUser;