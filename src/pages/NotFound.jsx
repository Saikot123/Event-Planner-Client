import React from 'react';
import { TbError404 } from "react-icons/tb";
import Button from '../shared/Button';
import notFound_lottie from '../assets/Lotties/notFound.json'
import Lottie from 'lottie-react';

const NotFound = () => {
    return (
        <div className='w-4/5 mx-auto py-32'>
            <div className='flex flex-col items-center justify-center'>
                <Lottie
                    animationData={notFound_lottie}
                    loop={true}
                ></Lottie>
                <h2 className='font-bold text-5xl text-secondary mb-3'>Not Found!!</h2>
                <Button
                    text={'Home'}
                    to={'/'}
                ></Button>
            </div>
        </div>
    );
};

export default NotFound;