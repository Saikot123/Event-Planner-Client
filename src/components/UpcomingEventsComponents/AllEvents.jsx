import React, { useEffect, useState } from 'react';
import Heading from '../../shared/Heading';
import EventCard from './EventCard';
import axios from 'axios';

const AllEvents = ({ events }) => {
    const [type, setType] = useState('all');
    const [search, setSearch] = useState('');
    const [allEvents, setAllEvents] = useState(events);
    const [load, setLoad] = useState(true);

    useEffect(() => {
        const params = {
            type,
            search
        };
        setLoad(true);

        axios.get(`https://event-planner-server-three.vercel.app/search_event?type=${type}&search=${search}`)
            .then(res => {
                console.log(res.data);
                setAllEvents(res?.data);
                setLoad(false);
            })
    }, [type, search])


    const handleSearch = e => {
        setSearch(e.target.value);
    }

    const handleType = (newType) => {
        setType(newType)
    }

    return (
        <div className='bg-base-300'>
            <div className='w-4/5 mx-auto py-14'>
                <Heading
                    message={'Upcoming Events'}
                ></Heading>

                {/* Input */}
                <div class="flex flex-col md:flex-row gap-2 justify-between mb-10">
                    <input onChange={handleSearch} type="text" placeholder="Search By Title" className="input text-secondary font-semibold" />

                    <div class="flex flex-wrap gap-2 justify-center mb-10">
                        <button onClick={() => handleType('all')} className={`btn btn-md rounded-full border-secondary text-secondary ${type === 'all' ? 'bg-secondary text-white' : ''}`}>All</button>
                        <button onClick={() => handleType("Plantation")} className={`btn btn-md rounded-full border-secondary text-secondary ${type === "Plantation" ? 'bg-secondary text-white' : ''}`}>Plantation</button>
                        <button onClick={() => handleType("Cleanup")} className={`btn btn-md rounded-full border-secondary text-secondary ${type === "Cleanup" ? 'bg-secondary text-white' : ''}`}>Cleanup</button>
                        <button onClick={() => handleType("Donation")} className={`btn btn-md rounded-full border-secondary text-secondary ${type === "Donation" ? 'bg-secondary text-white' : ''}`}>Donation</button>
                    </div>
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