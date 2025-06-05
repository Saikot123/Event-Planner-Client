import React from 'react';
import { Link } from 'react-router';

const Button = ({ text, to }) => {
    return (
        <button className='btn text-white bg-secondary'>
            <Link to={to}>{text}</Link>
        </button>
    );
};

export default Button;