import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import ThemeChanger from './ThemeChanger';
import { AuthContext } from '../../context/AuthContext';
import Avatar from './Avatar';
import logo from '../../assets/logo/logo.png'

const Navbar = () => {
    const { user } = use(AuthContext);

    const links = <>
        <li><NavLink to={'/'} className='bg-secondary text-white mr-1'>Home</NavLink></li>
        <li><NavLink to={'/upcomingEvents'} className='bg-secondary text-white mr-1'>Upcoming Events</NavLink></li>
        {
            user ?
                <>
                    <li><NavLink to={'/createEvent'} className='bg-secondary text-white mr-1'>Create Events</NavLink></li>
                    <li><NavLink to={'/manageEvent'} className='bg-secondary text-white mr-1'>Manage Events</NavLink></li>
                    <li><NavLink to={'/joinEvent'} className='bg-secondary text-white mr-1'>Join Events</NavLink></li>
                </>
                :
                <></>
        }


    </>
    return (
        <nav className='w-full bg-primary shadow-sm'>
            <div className="navbar w-4/5 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 gap-1 shadow">
                            {
                                links
                            }
                        </ul>
                    </div>
                    <img src={logo} className='w-20 h-20' alt="" />
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {
                            links
                        }
                    </ul>
                </div>
                <div className="navbar-end gap-5">
                    <ThemeChanger></ThemeChanger>
                    {
                        user ?
                            <Avatar></Avatar>
                            :
                            <div>
                                <Link to='/register' className="btn mr-1 bg-secondary text-white">Register</Link>
                                <Link to='/login' className="btn bg-secondary text-white">Login</Link>
                            </div>
                    }
                </div>
            </div>
        </nav>
    );
};

export default Navbar;