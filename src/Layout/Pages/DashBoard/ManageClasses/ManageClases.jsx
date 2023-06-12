import useAxiosSecure from '../../../../Hooks/useAxiosSequre';
import { useQuery } from '@tanstack/react-query';
import { FaRegTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ManageClases = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: allclass = [], refetch } = useQuery(['allclass'], async () => {
        const res = await axiosSecure.get('/allclasses')
        return res.data;
    })
    const handleAprovedClass = (id) => {
        fetch(`https://music-insuruments-learn-scholl.vercel.app/allclass/aproved/${id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        icon: 'success',
                        title: 'aproved this class!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            })
    };

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
                fetch(`https://music-insuruments-learn-scholl.vercel.app/allclass/${id}`, {
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




    console.log(allclass);
    return (
        <div className='mt-16 mb-10'>
            <Helmet>
                <title>Melody Music/Dashbord/admin/manageclases</title>
            </Helmet>
            <h1 className='text-center text-3xl text-bold font-sans mt-12 mb-16'>All instructor classes are available here<span className='text-purple-500'>({allclass?.length})</span></h1>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr className='uppercase  lg:text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
                            <th>Sl</th>
                            <th>image</th>
                            <th>class Name</th>
                            <th>Instructor Name</th>
                            <th>Instructor Email</th>
                            <th>price</th>
                            <th>seats</th>
                            <th>status</th>
                            <th>Aprove Class</th>
                            <th>deney</th>
                            <th>delet</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allclass?.map((singleclass, index) => <tr key={singleclass._id}>
                                <td>{index + 1}</td>
                                <td><img className='w-12' src={singleclass?.image} alt="class" /></td>
                                <td>{singleclass?.classname}</td>
                                <td>{singleclass?.instructorname}</td>
                                <td>{singleclass?.instructoremail}</td>
                                <td>{singleclass?.price}</td>
                                <td>{singleclass.seats}</td>
                                <td>
                                    <button className={`rounded text-white p-2 ${singleclass?.status === 'pending' ? 'bg-red-500' : 'bg-green-500'}`}>{singleclass?.status}</button>
                                </td>
                                <td>
                                    {
                                      singleclass.status === 'aproved' ?  <button disabled='disabled'  className=' bg-gray-300 rounded text-white p-2'>Aproved</button> :   <button  onClick={() => handleAprovedClass(singleclass._id)} className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   rounded text-white p-2'>Aproved</button>
                                    }
                                </td>
                                <td><label htmlFor="my_modal_6" className="btn bg-purple-500 text-white">Deney</label></td>
                                <td><button onClick={() => handleDeletClass(singleclass?._id)} className='bg-red-500 w-10 rounded text-white p-2'><FaRegTrashAlt className=' text-2xl' /></button></td>
                            </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            <div>
                <input type="checkbox" id="my_modal_6" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box">
                        <input type="text" placeholder='type you feadback' className='input w-96 h-16 input-bordered ' />
                        <div className="modal-action">
                            <label htmlFor="my_modal_6" className="btn btn-primary">close</label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageClases;