import React from 'react';
import { useLoaderData } from 'react-router';
import AllEvents from '../components/UpcomingEventsComponents/AllEvents';
import NoEvent from '../components/UpcomingEventsComponents/NoEvent';

const UpcomingEvents = () => {
    const events = useLoaderData();
    
    return (
        <div>
            {
                events.length ? <AllEvents events={events}></AllEvents> : <NoEvent></NoEvent>
            }
        </div>
    );
};

export default UpcomingEvents;