import React, { Suspense, use, useContext, useEffect, useState } from 'react';
import AllJoinedEvents from '../components/JoinedEvents/AllJoinedEvents';
import { AuthContext } from '../context/AuthContext';
import { joinEventsPromise } from '../api/joinEventApi';

const JoinEvent = () => {
    const { user, loading, setLoading } = useContext(AuthContext);
    const [load, setLoad] = useState(true);
    const [joinedEvents, setJoinedEvents] = useState([]);

    useEffect(() => {
        joinEventsPromise(user?.email, user?.accessToken)
            .then(res => res.json())
            .then(data => {
                const sortedData = data.sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
                    return dateA - dateB;
                });
                setJoinedEvents(sortedData);
                setLoad(false);
            })
    }, [user])

    if (load) {
        return <span className="loading loading-spinner loading-xl"></span>;
    }

    return (
        <div className='bg-base-300 py-14'>
            <AllJoinedEvents joinedEvents={joinedEvents} setJoinedEvents={setJoinedEvents}></AllJoinedEvents>
        </div>
    );
};

export default JoinEvent;