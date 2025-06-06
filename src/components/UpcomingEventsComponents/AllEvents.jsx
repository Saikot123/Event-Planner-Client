import React from 'react';
import Heading from '../../shared/Heading';
import EventCard from './EventCard';

const AllEvents = ({ events }) => {
    console.log(events);
    return (
        <div className='bg-base-300'>
            <div className='w-4/5 mx-auto py-14'>
                <Heading
                    message={'Upcoming Events'}
                ></Heading>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                        events.map(event=>
                            <EventCard key={event._id} event={event}></EventCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllEvents;