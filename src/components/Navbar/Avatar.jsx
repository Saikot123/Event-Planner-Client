import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Tooltip } from 'react-tooltip';
import { toast } from 'react-toastify';
import { Link, NavLink } from 'react-router';

const Avatar = () => {
    const { user, logout } = use(AuthContext);

    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success('Logout Successful');
            })
            .catch(error => {
                toast.error('Logout Failed!');
                console.log(error);
            })
    }
    return (
        <div className='flex justify-center items-center gap-2'>
            <div className="dropdown">
                <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 top-16 shadow-sm">
                    <li><NavLink to='/createEvent'>Create Event</NavLink></li>
                    <li><NavLink to='/manageEvent'>Manage Event</NavLink></li>
                    <li><NavLink to='/joinEvent'>Join Event</NavLink></li>
                </ul>
                {/* Avatar */}
                <div className="avatar hover:cursor-pointer" tabIndex={0} role="button" >
                    <div
                        data-tooltip-id="my-tooltip"
                        data-tooltip-content={`${user.displayName}`}
                        className="w-16 rounded-full"
                    >
                        <img src={user.photoURL} />
                    </div>
                </div>
            </div>

            <button className='btn bg-secondary text-white' onClick={handleLogout}>
                Logout
            </button>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Avatar;