import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className='w-full bg-base-300 dark:bg-primary border-t border-secondary'>
            <div className="footer w-4/5 mx-auto footer-horizontal  text-base-content py-10">
                <nav className='text-secondary'>
                    <h6 className="footer-title text-base font-bold">Company</h6>
                    <Link to={'/'} className="link link-hover">Home</Link>
                    <Link to={'/upcomingEvents'} className="link link-hover">Upcoming Event</Link>
                    <Link to={'/login'} className="link link-hover">Login</Link>
                    <Link to={'/register'} className="link link-hover">Register</Link>
                </nav>

                <nav className='text-secondary'>
                    <h6 className="footer-title text-base font-bold">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav className='text-secondary'>
                    <h6 className="footer-title text-base font-bold">Social</h6>
                    <div className="grid grid-flow-col gap-4">
                        <a>
                            <FaFacebook size={32} />
                        </a>
                        <a>
                            <FaInstagram size={32} />

                        </a>
                        <a>
                            <FaTwitter size={32} />

                        </a>
                    </div>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;