import React, { use, useEffect, useState } from 'react';
import MangeEvent from '../components/manageEvent/MangeEvent';
import NoEvent from '../components/UpcomingEventsComponents/NoEvent';
import { AuthContext } from '../context/AuthContext';
import { manageEventsPromise } from '../api/manageEventsPromise';

const ManageEvent = () => {
    const { user } = use(AuthContext);
    const [load, setLoad] = useState(true);
    const [myEvents, setMyEvents] = useState([]);

    useEffect(() => {
        manageEventsPromise(user?.email, user?.accessToken)
            .then(res => res.json())
            .then(data => {
                setMyEvents(data);
                setLoad(false);
            })
    }, [user])

    if (load) {
        return <span className="loading loading-spinner loading-xl"></span>;
    }

    return (
        <div className='bg-base-300'>
            {
                myEvents.length ? <MangeEvent myEvents={myEvents}></MangeEvent> :
                    <NoEvent></NoEvent>
            }
        </div>
    );
};

export default ManageEvent;