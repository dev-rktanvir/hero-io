import React from 'react';
import AppCard from './AppCard/AppCard';
import { Link } from 'react-router';

const TrendingApps = ({ allApps }) => {
    const trendingApps = allApps.sort((a, b) => b.downloads - a.downloads);
    const top8TrendingApps = trendingApps.slice(0, 8);
    return (
        <div className='container mx-auto px-3 py-10 lg:py-20 text-center'>
            <h2 className='font-bold text-5xl text-primary'>Trending Apps</h2>
            <p className='text-xl text-secondary mt-4'>
                Explore All Trending Apps on the Market developed by us
            </p>

            {/* Apps Container */}
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-10'>
                {
                    top8TrendingApps.map(trendingApps => <AppCard
                        key={trendingApps.id}
                        trendingApps={trendingApps}></AppCard>)
                }
            </div>

            {/* Show All Btn */}
            <div>
                <Link to={'/apps'}>
                    <button className='px-4 py-3 rounded-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] cursor-pointer text-white w-36.25'>Show All</button>
                </Link>
            </div>
        </div>
    );
};

export default TrendingApps;