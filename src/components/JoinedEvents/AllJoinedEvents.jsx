import React from 'react';
import JoinedEvent from './JoinedEvent';
import Heading from '../../shared/Heading';

const AllJoinedEvents = ({ joinedEvents }) => {
    
    return (
        <div className='w-4/5 mx-auto'>
            <Heading
                message={'My Joined Events'}
            ></Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    joinedEvents.map(joinedEvent =>
                        <JoinedEvent key={joinedEvent._id} joinedEvent={joinedEvent}></JoinedEvent>
                    )
                }
            </div>
        </div>
    );
};

export default AllJoinedEvents;