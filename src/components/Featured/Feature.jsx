import React from 'react';

const Feature = ({ icon, heading, message }) => {
    return (
        <div className='flex flex-col justify-center items-center lg:justify-start lg:items-start gap-3'>
            <div className='text-secondary'>
                {icon}
            </div>
            <div className='space-y-3 text-center lg:text-left'>
                <h2 className='text-xl font-bold text-secondary'>{heading}</h2>
                <p className='text-secondary text-base'>{message}</p>
            </div>
        </div>
    );
};

export default Feature;