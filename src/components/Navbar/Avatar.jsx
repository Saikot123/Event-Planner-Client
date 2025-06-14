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
        <div className="flex justify-center items-center gap-2">
      <div className="dropdown dropdown-end">
        <div tabIndex={0} role="button" className="avatar hover:cursor-pointer">
          <div
            data-tooltip-id="my-tooltip"
            data-tooltip-content={`${user?.displayName}`}
            className="w-16 rounded-full"
          >
            <img src={user?.photoURL} alt="User Avatar" />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content z-[100] menu p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><NavLink to="/createEvent" className="bg-secondary text-white mb-1">Create Event</NavLink></li>
          <li><NavLink to={`/manageEvent/${user?.email}`} className="bg-secondary text-white mb-1">Manage Event</NavLink></li>
          <li><NavLink to={`/joinEvent/${user?.email}`} className="bg-secondary text-white">Join Event</NavLink></li>
        </ul>
      </div>

      <button className="btn bg-secondary text-white" onClick={handleLogout}>
        Logout
      </button>

      <Tooltip id="my-tooltip" />
    </div>
    );
};

export default Avatar;