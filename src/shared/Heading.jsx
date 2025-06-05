import React from 'react';
import { Link } from 'react-router';

const Heading = ({ message }) => {
    return (
        <h2 className='font-bold text-3xl text-secondary'>{message}</h2>
    );
};

export default Heading; 