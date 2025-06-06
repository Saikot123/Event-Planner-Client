import { FaLocationDot } from 'react-icons/fa6';
import { MdGroups } from "react-icons/md";
import { useLoaderData } from 'react-router';
import Button from '../shared/Button';
import Heading from '../shared/Heading';

const EventDetails = () => {
    const event = useLoaderData();

    const handleJoinEvent = () => {

    }

    return (
        <div className='w-4/5 mx-auto py-10'>
            <Heading
                message={'Event Details'}
            ></Heading>
            <div className="card bg-base-300 shadow-sm max-w-96 mx-auto">
                <div className="relative">
                    <figure>
                        <img className='bg-cover w-full h-56 bg-center'
                            src={event.image} />
                    </figure>
                    <div className="bg-secondary p-2 text-white rounded-xl absolute -bottom-4 left-[35%] font-semibold">
                        {event.date}
                    </div>
                </div>
                <div className="card-body text-secondary space-y-2">
                    <h2 className="card-title text-2xl">{event.title}</h2>
                    <div className='text-base flex items-center justify-between'>
                        <div className="flex items-center justify-center gap-1 font-semibold">
                            <FaLocationDot />
                            {event.location}
                        </div>
                        <div className="badge badge-secondary">
                            {event.type}
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-1 text-base font-semibold'>
                        <MdGroups size={20} />
                        <p>Participants : {event.participants.length}</p>
                    </div>
                    <p>{event.description}</p>
                    <div className="card-actions justify-center">
                        <button onClick={handleJoinEvent} className='btn text-white bg-secondary'>
                            Join Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;