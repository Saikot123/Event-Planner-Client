import React, { Suspense, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import AllJoinedEvents from '../components/JoinedEvents/AllJoinedEvents';
import NoEvent from '../components/UpcomingEventsComponents/NoEvent';

const JoinEvent = () => {
    const eventsData = useLoaderData();
    const [joinedEvents, setJoinedEvents] = useState(eventsData);

    useEffect(() => {
        const sortedEvents = joinedEvents.sort((a, b) => {
            const dateA = new Date(a.date);
            const dateB = new Date(b.date);
            return dateA - dateB;
        });
        setJoinedEvents(sortedEvents);
    }, [joinedEvents])


    return (
        <div className='bg-base-300 py-14'>
            {
                joinedEvents.length ?
                    <AllJoinedEvents joinedEvents={joinedEvents}></AllJoinedEvents>
                    :
                    <NoEvent></NoEvent>
            }
        </div>
    );
};

export default JoinEvent;