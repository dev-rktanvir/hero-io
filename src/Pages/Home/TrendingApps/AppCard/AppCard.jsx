import React from 'react';
import { MdOutlineFileDownload } from 'react-icons/md';
import { GoStarFill } from 'react-icons/go';
import { Link } from 'react-router';

const AppCard = ({ trendingApps }) => {
    const { id, image, title, downloads, ratingAvg } = trendingApps;
    return (
        <Link to={`/app-details/${id}`}>
            <div className='p-4 rounded-sm bg-white shadow-md'>
                {/* App Image */}
                <div>
                    <img className='rounded-lg w-full' src={image} alt="" />
                </div>

                {/* App Name */}
                <div>
                    <p className='text-left font-medium text-xl text-primary my-4'>{title}</p>
                </div>

                {/* Downloads & Rating */}
                <div className='flex items-center justify-between'>
                    {/* Downloads */}
                    <div className='flex items-center gap-1 px-2.5 py-1.5 rounded-sm font-medium text-[#00D390] bg-[#F1F5E8]'>
                        <MdOutlineFileDownload size={24} />
                        <p>{(downloads / 1000000).toFixed(0)}M</p>
                    </div>

                    {/* Rating */}
                    <div className='flex items-center gap-1 px-2.5 py-1.5 rounded-sm font-medium text-[#FF8811] bg-[#FFF0E1]'>
                        <GoStarFill size={20} />
                        <p>{ratingAvg}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default AppCard;