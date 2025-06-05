import React from 'react';
import Banner from '../components/Banner/Banner';
import Featured from '../components/Featured/Featured';
import Gallery from '../components/gallery/Gallery';

const Home = () => {
    return (
        <div className='bg-base-300'>
            <Banner></Banner>
            <Featured></Featured>
            <Gallery></Gallery>
        </div>
    );
};

export default Home;