import React, { use } from 'react';
import Heading from '../../shared/Heading';
import ManageEventCard from './ManageEventCard';

const MangeEvent = ({ myEvents }) => {
    return (
        <div className='w-4/5 mx-auto py-14'>
            <Heading
                message={'My Events'}
            ></Heading>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-fit md:w-full gap-3'>
                {
                    myEvents.map(myEvent => <ManageEventCard
                        key={myEvent._id}
                        myEvent={myEvent}
                    ></ManageEventCard>)
                }
            </div>
        </div>
    );
};

export default MangeEvent;