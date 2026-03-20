import React from 'react';

const AppStatDetails = ({ icon, title, number }) => {
    return (
        <div className='flex md:flex-col items-center md:items-start gap-8 md:gap-2'>
            {/* Image */}
            <div>
                <img src={icon} alt="" />
            </div>

            {/* content */}
            <div>
                <p className='text-primary my-2'>{title}</p>
                <p className='font-extrabold text-4xl text-primary'>{number}{title === "Downloads" && 'M'}{title === "Total Reviews" && 'K'}</p>
            </div>
        </div>
    );
};

export default AppStatDetails;