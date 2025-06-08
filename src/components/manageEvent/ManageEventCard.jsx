import React, { useState } from 'react';
import Button from '../../shared/Button';
import { FaLocationDot } from 'react-icons/fa6';

const ManageEventCard = ({ myEvent }) => {
    const [event, setEvent] = useState(myEvent);

    return (
        <div className="card bg-base-100 w-[350px] shadow-sm">
            <div className="relative">
                <figure>
                    <img className='bg-cover w-full h-56 bg-center rounded-t-md'
                        src={event?.image} />
                </figure>
                <div className="bg-secondary p-2 text-white rounded-xl absolute -bottom-4 left-[35%] font-semibold">
                    {event?.date}
                </div>
            </div>
            <div className="card-body text-secondary space-y-2">
                <h2 className="card-title text-2xl">{event?.title}</h2>
                <div className='text-base flex items-center justify-between'>
                    <div className="flex items-center justify-center gap-1 font-semibold">
                        <FaLocationDot />
                        {event?.location}
                    </div>
                    <div className="badge badge-secondary">
                        {event?.type}
                    </div>
                </div>
                <p>{event?.description}</p>
                <div className="card-actions justify-center">
                    <Button
                        text={'Update Event'}
                        to={`/updateEvent/${event._id}`}
                    ></Button>
                </div>
            </div>
        </div>
    );
};

export default ManageEventCard;