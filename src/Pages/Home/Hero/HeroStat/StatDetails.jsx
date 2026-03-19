import React from 'react';

const StatDetails = ({title, number, details}) => {
    return (
        <div className='text-center text-white/50 font-light mt-10'>
            <h2>{title}</h2>
            <p className='font-extrabold text-6xl my-4 text-white'>{number}</p>
            <p>{details}</p>
        </div>
    );
};

export default StatDetails;