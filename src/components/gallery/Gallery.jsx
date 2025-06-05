import React from 'react';
import Heading from '../../shared/Heading';
import gallery01 from '../../assets/gallery/gallery_01.jpg'
import gallery02 from '../../assets/gallery/gallery_02.jpg'
import gallery03 from '../../assets/gallery/gallery_03.jpg'
import gallery04 from '../../assets/gallery/gallery_04.jpg'
import gallery05 from '../../assets/gallery/gallery_05.jpg'

const Gallery = () => {
    return (
        <div className='w-4/5 mx-auto py-14'>
            <Heading
                message={'Our Gallery'}
            ></Heading>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 h-full'>
                <div className='h-full w-full'>
                    <img className='h-full w-full' src={gallery01} alt="" />
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div>
                        <img src={gallery02} alt="" />
                    </div>
                    <div>
                        <img src={gallery03} alt="" />
                    </div>
                    <div>
                        <img src={gallery04} alt="" />
                    </div>
                    <div>
                        <img src={gallery05} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;