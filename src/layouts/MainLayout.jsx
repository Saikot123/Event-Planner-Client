import React, { Suspense } from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
                <Outlet></Outlet>
            </Suspense>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;