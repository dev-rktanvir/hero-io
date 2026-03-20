import React from 'react';
import appErrorImg from '../../assets/App-Error.png';

const AppNotFound = ({title, text}) => {
    return (
        <div className='container mx-auto px-3 py-20 flex flex-col gap-5 items-center justify-center'>
            {/* Iamge */}
            <div>
                <img src={appErrorImg} alt="" />
            </div>

            {/* Content */}
            <div className='flex flex-col justify-center items-center'>
                <h2 className='font-semibold text-4xl md:text-5xl text-primary text-center'>{title}</h2>
                <p className='text-xl text-secondary mt-4 text-center'>{text}</p>
            </div>
        </div>
    );
};

export default AppNotFound;