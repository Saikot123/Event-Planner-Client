import React from 'react';
import { useLoaderData } from 'react-router';
import MangeEvent from '../components/manageEvent/MangeEvent';
import NoEvent from '../components/UpcomingEventsComponents/NoEvent';

const ManageEvent = () => {
    const myEvents = useLoaderData();

    return (
        <div className='bg-base-300'>
            {
                myEvents.length ? <MangeEvent myEvents={myEvents}></MangeEvent> : <NoEvent></NoEvent>
            }
        </div>
    );
};

export default ManageEvent;