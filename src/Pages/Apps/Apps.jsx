import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { useLoaderData } from 'react-router';
import AppCard from '../Home/TrendingApps/AppCard/AppCard';

const Apps = () => {
    const allApps = useLoaderData();
    return (
        <div className='container mx-auto px-3 py-10 lg:py-20 text-center'>
            {/* Title & Sub Title */}
            <div>
                <h2 className='font-bold text-5xl text-primary'>Our All Applications</h2>
                <p className='text-xl text-secondary mt-4'>
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>

            {/* All apps count & Search Bar */}
            <div className='flex flex-col md:flex-row gap-5 items-center justify-between mt-10'>
                {/* Apps count */}
                <div>
                    <h3 className='font-semibold text-2xl text-primary'>({allApps.length}) Apps Found</h3>
                </div>

                {/* Search Bar */}
                <div className='relative'>
                    {/* Icon */}
                    <span className='absolute ml-3 top-1/2 -translate-y-1/2 text-secondary'>
                        <IoSearchOutline size={24} />
                    </span>
                    {/* Input */}
                    <input className='md:w-100 text-secondary pl-12 px-4 py-3 rounded-sm border border-[#D2D2D2] outline-secondary' type="text" placeholder='search Apps' />
                </div>
            </div>

            {/* All apps container */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10'>
                {
                    allApps.map(app => <AppCard key={app.id} trendingApps={app}></AppCard>)
                }
            </div>
        </div>
    );
};

export default Apps;