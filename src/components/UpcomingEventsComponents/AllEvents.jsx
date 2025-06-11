import React, { useState } from 'react';
import Heading from '../../shared/Heading';
import EventCard from './EventCard';

const AllEvents = ({ events }) => {
    const [type, setType] = useState('all');
    const [allEvents,setAllEvents] = useState(events);

    const handleEventSelect = newType => {
        setType(newType);
        if(newType === 'all'){
            setAllEvents(events);
        }else{
            const filteredEvents = events.filter(event => event?.type === newType);
            console.log(filteredEvents);
            setAllEvents(filteredEvents);
        }
        console.log(allEvents);
    }
    return (
        <div className='bg-base-300'>
            <div className='w-4/5 mx-auto py-14'>
                <Heading
                    message={'Upcoming Events'}
                ></Heading>

                <div class="flex flex-wrap gap-2 justify-center mb-10">
                    <button onClick={()=>handleEventSelect('all')} className={`btn btn-md rounded-full border-secondary text-secondary ${type === 'all' ? 'bg-secondary text-white' : ''}`}>All</button>
                    <button onClick={()=>handleEventSelect("Plantation")} className={`btn btn-md rounded-full border-secondary text-secondary ${type === "Plantation" ? 'bg-secondary text-white' : ''}`}>Plantation</button>
                    <button onClick={()=>handleEventSelect("Cleanup")} className={`btn btn-md rounded-full border-secondary text-secondary ${type === "Cleanup" ? 'bg-secondary text-white' : ''}`}>Cleanup</button>
                    <button onClick={()=>handleEventSelect("Donation")} className={`btn btn-md rounded-full border-secondary text-secondary ${type === "Donation" ? 'bg-secondary text-white' : ''}`}>Donation</button>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto w-fit md:w-full gap-3'>
                    {
                        allEvents.map(event =>
                            <EventCard key={event?._id} event={event}></EventCard>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default AllEvents;