import React from 'react';
import downloadImg from '../../../assets/icon-downloads.png';
import startImg from '../../../assets/icon-ratings.png';

const InstallDetails = ({ insApp }) => {
    const { image, title, downloads, ratingAvg, size } = insApp
    return (
        <div className='bg-white p-4 mb-4 rounded-sm flex gap-5 flex-col md:flex-row items-center justify-between'>
            {/* Left side */}
            <div className='flex flex-col md:flex-row items-center gap-4'>
                {/* Image */}
                <div>
                    <img className='w-20 h-20 rounded-lg' src={image} alt="" />
                </div>

                {/* Details */}
                <div>
                    {/* App Name */}
                    <div>
                        <h2 className='font-medium text-xl text-primary text-center md:text-left'>{title}</h2>
                    </div>
                    {/* Icons */}
                    <div className='flex items-center gap-4 mt-4'>
                        {/* Download Icon */}
                        <div className='flex items-center gap-2'>
                            <img className='h-4 w-4' src={downloadImg} alt="" />
                            <p className='font-medium text-[#00D390]'>{(downloads / 1000000).toFixed(0)}M</p>
                        </div>
                        {/* Star Icon */}
                        <div className='flex items-center gap-2'>
                            <img className='h-4 w-4' src={startImg} alt="" />
                            <p className='font-medium text-[#FF8811]'>{ratingAvg}</p>
                        </div>
                        {/* App size */}
                        <div className='flex items-center gap-2'>
                            <p className='font-medium text-secondary'>{size} MB</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side */}
            <div>
                <button className='px-4 py-3 rounded-sm bg-[#00D390] font-semibold text-white cursor-pointer'>Uninstall</button>
            </div>
        </div>
    );
};

export default InstallDetails;