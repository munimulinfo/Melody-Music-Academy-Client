import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import logo from '../assets/image/music_logo_design__3_-removebg-preview.png';
import useAdmin from '../Hooks/useAdmin';
import useInstructor from '../Hooks/useInstructor';

const Dashboard = () => {
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        {
            isAdmin ? <>
                <li><Link to='/dashboard/manageuser'>Manage Users</Link></li>
                <li><Link to='/dashboard/manageclasses'>Manage Classes</Link></li>
                <li><Link to='/dashboard/allPaymentmanage'>Manage Payments</Link></li></>
                : isInstructor ? <>
                    <li><Link to='/dashboard/addaclass'>Add a Class</Link></li>
                    <li><Link to='/dashboard/myclasses'>My Classes</Link></li>
                    <li><Link to='/dashboard/instructorEnrool'>Enrolled Classes</Link></li></>
                    : <>
                        <li><Link to='/dashboard/selectedclass'>Selected Classes</Link></li>
                        <li><Link to='/dashboard/enroolclass'>Enrolled Classes</Link></li></>
        }
    </>
    return (
        <div>
            <div className="navbar h-20">
                <div className="navbar-start ">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <img className='w-20' src={logo} alt="logo" />
                    <h1 className='text-2xl text-center text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Melody Music Academy</h1>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-4 uppercase">
                        {navOptions}
                    </ul>
                </div>
            </div>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;