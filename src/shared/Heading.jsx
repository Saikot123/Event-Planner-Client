import React from 'react';
import { Link } from 'react-router';

const Heading = ({ message }) => {
    return (
        <h2 className='font-bold text-5xl text-secondary text-center pb-10'>{message}</h2>
    );
};

export default Heading; 