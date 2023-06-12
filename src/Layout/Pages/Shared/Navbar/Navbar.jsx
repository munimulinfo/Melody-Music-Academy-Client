import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../../assets/music_logo_design__3_-removebg-preview.png'
import { AuthContext } from '../../../../Providers/AuthProviders';
import useAdmin from '../../../../Hooks/useAdmin';
import useInstructor from '../../../../Hooks/useInstructor';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }
    const navOptions = <>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/instructors'>Instructors</Link></li>
        <li><Link to='/classes'>Classes</Link></li>
        {
            isAdmin ? <li><Link to='/dashboard/manageuser'>DASHBOARD</Link></li> : isInstructor ? <li><Link to='/dashboard/myclasses'>DASHBOARD</Link></li> : user ? <li><Link to='/dashboard/selectedclass'>DASHBOARD</Link></li> : <li></li>
        }
    </>
    return (
        <>
            <div className="navbar h-24 max-w-screen-xl">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/instructors'>Instructors</Link></li>
                            <li><Link to='/classes'>Classes</Link></li>
                            {
                                isAdmin ? <li>< Link to='/dashboard/manageuser'>DASHBOARD</Link></li> : isInstructor ? <li><Link to='/dashboard/myclasses'>DASHBOARD</Link></li> : user ? <li ><Link to='/dashboard/selectedclass'>DASHBOARD</Link></li> :  <li></li>
                            }
                        </ul>
                    </div>
                    <img className='lg:w-20 w-8' src={logo} alt="logo" />
                    <span className='lg:text-2xl text-[8px]  lg:text-transparent bg-clip-text  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>Melody Music Academy</span>
                </div >
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 flex uppercase ">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                    {
                        user ? <img className='lg:w-14 w-10 rounded-full h-14 mr-4' src={user?.photoURL} alt="user" /> : <button className='btn btn-sm btn-secondary lg:btn-md'><Link to='/login'>Login</Link></button>
                    }
                    {
                        user && <button className='text-bold btn btn-xs btn-secondary lg:btn-md ' onClick={handleLogOut}>LogOut</button>
                    }
                </div>
            </div>
        </>
    );
};
export default Navbar;