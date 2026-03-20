import React from 'react';
import errorImg from '../../assets/error-404.png';
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className='container mx-auto px-3 py-20 flex flex-col gap-5 items-center justify-center'>
            {/* Iamge */}
            <div>
                <img src={errorImg} alt="" />
            </div>

            {/* Content */}
            <div className='flex flex-col justify-center items-center'>
                <h2 className='font-semibold text-4xl md:text-5xl text-primary text-center'>Oops, Page Not Found!</h2>
                <p className='text-xl text-secondary mt-4 text-center'>The page you are looking for is not available.</p>
            </div>

            {/* Button */}
            <div>
                <Link to={'/'}>
                    <button className='px-4 py-3 rounded-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] cursor-pointer text-white w-36.25'>Go Back!</button>
                </Link>
            </div>
        </div>
    );
};

export default Error;