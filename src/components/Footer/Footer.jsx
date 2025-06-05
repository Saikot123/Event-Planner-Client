import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className='w-full bg-base-300'>
            <div className="footer w-4/5 mx-auto sm:footer-horizontal  text-base-content py-10">
                <nav className='text-secondary'>
                    <h6 className="footer-title text-base font-bold">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav >
                <nav className='text-secondary'>
                    <h6 className="footer-title text-base font-bold">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
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