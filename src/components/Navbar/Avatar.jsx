import React, { use } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Tooltip } from 'react-tooltip';

const Avatar = () => {
    const { user, logout } = use(AuthContext);

    const handleLogout = () => {
        logout();
    }
    return (
        <div className='flex justify-center items-center gap-2'>
            {/* Avatar */}
            <div className="avatar">
                <div
                data-tooltip-id="my-tooltip"
                 data-tooltip-content={`${user.displayName}`}
                 className="w-16 rounded-full"
                 >
                    <img src={user.photoURL} />
                </div>
            </div>
            <button className='btn' onClick={handleLogout}>
                Logout
            </button>
            <Tooltip id="my-tooltip" />
        </div>
    );
};

export default Avatar;