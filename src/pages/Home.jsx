import React from 'react';
import Banner from '../components/Banner/Banner';
import Featured from '../components/Featured/Featured';
import Gallery from '../components/gallery/Gallery';
import Newsteller from '../components/Newsteller/Newsteller';

const Home = () => {
    return (
        <div className='bg-base-300'>
            <Banner></Banner>
            <Featured></Featured>
            <Gallery></Gallery>
            <Newsteller></Newsteller>
        </div>
    );
};

export default Home;