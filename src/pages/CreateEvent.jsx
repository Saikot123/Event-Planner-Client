import axios from 'axios';
import Heading from '../shared/Heading'
import React, { use, useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { toast } from 'react-toastify';
import { AuthContext } from '../context/AuthContext';

// m/d/y

const CreateEvent = () => {
    const [startDate, setStartDate] = useState(new Date());
    const { user } = use(AuthContext);

    const previousDate = (date) => {
        const today = new Date();
        const dateArray = date.split('/');

        const month = parseInt(dateArray[0]) - 1; //Convert to 0 based
        const day = parseInt(dateArray[1]);
        const year = parseInt(dateArray[2]);

        const inputDate = new Date(year, month, day);

        if (inputDate <= today) {
            toast.error('Please choose a future date!');
            return false;
        }

        return true;
    }

    const handleCreateEvent = e => {
        e.preventDefault();
        const title = e.target.title.value;
        const location = e.target.location.value;
        const type = e.target.type.value;
        const image = e.target.image.value;
        const date = e.target.date.value;
        const description = e.target.description.value;
        const data = {
            title,
            creator_email:user.email,
            location,
            type,
            image,
            date,
            description
        }
        // Check Date
        if (!previousDate(date)) {
            return;
        }

        // Update Database
        axios.post('http://localhost:3000/events', data)
            .then(res => {
                console.log(res.data);
                if(res.data.insertedId){
                    toast.success('Event Created');
                }
            })
            .catch(error => {
                toast.error('Create Event Failed!');
            })
    }
    return (
        <div className='bg-base-300'>
            <div className='w-4/5 mx-auto py-14'>
                <Heading
                    message={'Create Event'}
                ></Heading>
                <div className="flex justify-center items-center">
                    <div className="card w-4/5 shrink-0 shadow-2xl bg-white">
                        <div className="card-body text-secondary">
                            <form onSubmit={handleCreateEvent}>
                                <fieldset className="fieldset">
                                    {/* Title */}
                                    <label className="label text-xl font-semibold">Title</label>
                                    <input type="text" name='title' className="input w-full" placeholder="Event Title" />

                                    {/* Location */}
                                    <label className="label text-xl font-semibold">Event Location</label>
                                    <input type="text" name='location' className="input w-full" placeholder="Event Location" />

                                    {/* Type */}
                                    <label className="label text-xl font-semibold">Event Type</label>
                                    <select defaultValue="Pick Event Type" name='type'
                                        className="select w-full">
                                        <option disabled={true}>Pick a Type</option>
                                        <option>Cleanup</option>
                                        <option>Plantation</option>
                                        <option>Donation</option>
                                    </select>

                                    {/* Image */}
                                    <label className="label text-xl font-semibold">Event Image</label>
                                    <input type="text" name='image' className="input w-full" placeholder="Event Image" />

                                    {/* Date */}
                                    <label className="label text-xl font-semibold">Event Date</label>
                                    <DatePicker className='input w-full' name='date' selected={startDate} onChange={(date) => setStartDate(date)} />

                                    {/* Description */}
                                    <label className="label text-xl font-semibold">Description</label>
                                    <textarea className="textarea w-full" name='description' placeholder="Event Description"></textarea>

                                    <div className='mx-auto pt-3'>
                                        <button className="btn w-[130px] btn-secondary ">Submit</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateEvent;