import React, { useEffect } from 'react';
import JoinedEvent from './JoinedEvent';
import Heading from '../../shared/Heading';
import NoEvent from '../UpcomingEventsComponents/NoEvent';

const AllJoinedEvents = ({ joinedEvents, setJoinedEvents }) => {

    useEffect(() => {
        if (joinedEvents.length) {
            const sortedEvents = joinedEvents.sort((a, b) => {
                const dateA = new Date(a.date);
                const dateB = new Date(b.date);
                return dateA > dateB;
            });
            setJoinedEvents(sortedEvents);
        }
    }, [])

    return (
        <div className='w-4/5 mx-auto'>
            <Heading
                message={'My Joined Events'}
            ></Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-fit md:w-full gap-3'>
                {
                    joinedEvents.length > 0 ?
                        joinedEvents.map(joinedEvent =>
                            <JoinedEvent key={joinedEvent._id} joinedEvent={joinedEvent}></JoinedEvent>
                        )
                        :
                        <NoEvent></NoEvent>
                }

            </div>
        </div>
    );
};

export default AllJoinedEvents;