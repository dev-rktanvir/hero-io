import React, { useEffect, useState } from 'react';
import AppStatDetails from './AppStatDetails';
import downloadImg from '../../../assets/icon-downloads.png';
import starIcon from '../../../assets/icon-ratings.png';
import reviewIcon from '../../../assets/icon-review.png';
import { addCart, getCart } from '../../../utilities/utilities';

const AppStat = ({ appData }) => {
    const { id, image, title, companyName, size, reviews, ratingAvg, downloads } = appData;

    const [install, setInstall] = useState(() => {
        const storedCartIds = getCart();
        return storedCartIds.includes(id);
    });

    // Handle Install Now Button
    const handleInstallNowBtn = () => {
        setInstall(true);

        // save to local storage
        addCart(id);
    }


    return (
        <div className='flex flex-col lg:flex-row items-center gap-10 border-b border-secondary/20 pb-10 '>
            {/* Image */}
            <div className='flex-1'>
                <img className='h-full w-full object-contain' src={image} alt="" />
            </div>

            {/* Content */}
            <div className='flex-2'>
                {/* Top part */}
                <div className='border-b border-secondary/20 pb-8'>
                    <h2 className='font-bold text-3xl text-primary text-center md:text-left'>{title}</h2>
                    <p className='text-xl text-secondary mt-3'>
                        Developed by <span className='font-semibold gradient-clr'>{companyName}</span>
                    </p>
                </div>

                {/* Bottom part */}
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full pt-8'>
                    {/* Downloads */}
                    <AppStatDetails
                        icon={downloadImg}
                        title={"Downloads"}
                        number={(downloads / 1000000).toFixed(0)}></AppStatDetails>

                    {/* Ratings */}
                    <AppStatDetails
                        icon={starIcon}
                        title={"Average Ratings"}
                        number={ratingAvg}></AppStatDetails>
                    <AppStatDetails
                        icon={reviewIcon}
                        title={"Total Reviews"}
                        number={(reviews / 1000).toFixed(0)}></AppStatDetails>
                </div>

                {/* Button */}
                <button
                    onClick={handleInstallNowBtn}
                    disabled={install}
                    className={`px-5 py-4 rounded-sm text-white font-semibold text-xl mt-8 ${install ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#00D390] cursor-pointer'}`}>
                    {
                        install ? "Installed" : `Install Now (${size}) MB`
                    }
                </button>
            </div>
        </div>
    );
};

export default AppStat;