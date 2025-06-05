import React from 'react';

import banner from '../../assets/banner/banner.jpg'
import { Typewriter } from 'react-simple-typewriter';
import Button from '../../shared/Button';

const Banner = () => {
    const words = ['Join', 'Create', 'Manage'];

    return (
        <div
            className="relative bg-cover bg-center h-[70vh] flex items-center justify-center my-10 rounded-md"
            style={{ backgroundImage: `url(${banner})` }}
        >
            {/* Overlay with semi-transparent black */}
            <div class="absolute inset-0 bg-black opacity-30 rounded-md"></div>

            {/* Text content */}
            <div class="z-50 text-center text-white flex flex-col gap-3">
                <h2 className='text-5xl font-bold'><Typewriter words={words} delaySpeed={1000} loop={false}></Typewriter> Events</h2>
                <p className="text-xl font-semibold">
                    Be a part of change in your community. Organize or join local events for social good.
                </p>
                <div>
                    <Button text={'Upcoming Events'} to={`/upcomingEvents`}></Button>
                </div>
            </div>

        </div>



    );
};

export default Banner;


