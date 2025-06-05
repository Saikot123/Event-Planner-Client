import React from 'react';
import Button from '../../shared/Button';
import Heading from '../../shared/Heading';
import newsteller_lottie from '../../assets/Lotties/newsteller_lottie.json'
import Lottie from 'lottie-react';

const Newsteller = () => {
    return (
        <div className='bg-white'>
            <div className='w-4/5 mx-auto py-14'>
                <h2 className='font-bold text-5xl text-secondary text-center pb-10 lg:pb-0'>Our Newsteller</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
                    {/* Content */}
                    <div className='flex flex-col items-start justify-end gap-5 text-secondary'>
                        <div className='flex flex-col gap-1 w-full'>
                            <label className="label text-xl font-semibold">Name</label>
                            <input type="text" className="input w-full" placeholder="Your Name" />
                        </div>

                        <div className='flex flex-col gap-1 w-full'>
                            <label className="label text-xl font-semibold">Email</label>
                            <input type="email" className="input w-full" placeholder="Your Email" />
                        </div>

                        <div>
                            <Button
                                text={'Subscribe'}
                            ></Button>
                        </div>
                    </div>

                    {/* Animation */}
                    <div className='w-3/4'>
                        <Lottie animationData={newsteller_lottie} loop={true} >

                        </Lottie>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsteller;