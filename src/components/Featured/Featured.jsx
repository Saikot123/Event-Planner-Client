import React from 'react';
import Heading from '../../shared/Heading';
import { FaCalendarCheck } from 'react-icons/fa';
import { FaTools } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { AiOutlinePlusCircle } from "react-icons/ai";


import Feature from './Feature';

const Featured = () => {
    return (
        <div className='bg-white dark:bg-primary py-14'>
            <div className='space-y-5 w-4/5 mx-auto'>
                <Heading message={'Our Features'}></Heading>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4'>
                    <Feature
                        icon={<FaCalendarCheck size={40} />}
                        heading={'Upcoming Events'}
                        message={'Stay updated with the latest social initiatives happening near you. Never miss a chance to make a difference/.'}
                    ></Feature>

                    <Feature
                        icon={<MdGroups size={44} />}
                        heading={'Join Events'}
                        message={'Find local events and join hands with your community to contribute toward a meaningful cause.'}
                    ></Feature>

                    <Feature
                        icon={<AiOutlinePlusCircle size={40} />}
                        heading={'Create Events'}
                        message={'Have an idea to uplift your community? Start an event and bring people together to act on it.'}
                    ></Feature>

                    <Feature
                        icon={<FaTools size={40} />}
                        heading={'Mange Events'}
                        message={'Track attendance, edit details, and stay organized with your hosted or joined events—simple and efficient.'}
                    ></Feature>
                </div>
            </div>
        </div>
    );
};

export default Featured;