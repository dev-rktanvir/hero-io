import React, { useState } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import InstalledApps from './InstalledApps/InstalledApps';
import { useLoaderData } from 'react-router';
import { getCart } from '../../utilities/utilities';

const Installation = () => {
    const allApps = useLoaderData();
    const storedAppsIds = getCart();
    const installedApps = allApps.filter(app => storedAppsIds.includes(app.id));

    const [showApps, setShowApps] = useState(installedApps);
    const handleSort = (sortType) => {
        if (sortType === "high") {
            setShowApps(installedApps.sort((a, b) => b.downloads - a.downloads));
        }
        if (sortType === "low") {
            setShowApps(installedApps.sort((a, b) => a.downloads - b.downloads));
        }
    }
    return (
        <div className='container mx-auto px-3 py-10 lg:py-20 text-center'>
            {/* Title & Sub Title */}
            <div>
                <h2 className='font-bold text-4xl md:text-5xl text-primary'>Your Installed Apps</h2>
                <p className='text-xl text-secondary mt-4'>
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>

            {/* Installed apps count & Sorting */}
            <div className='flex gap-5 items-center justify-between mt-20'>
                {/* Apps count */}
                <div>
                    <h3 className='font-semibold text-2xl text-primary'>{installedApps.length} Apps Found</h3>
                </div>

                {/* Sort by size */}
                <div>
                    <select defaultValue="Sort By Size" className="select text-base text-secondary border border-[#D2D2D2] outline-none w-35">
                        <option disabled={true}>Sort By Size</option>
                        <option onClick={() => handleSort("high")}>High-Low</option>
                        <option onClick={() => handleSort("low")}>Low-High</option>
                    </select>
                </div>
            </div>

            {/* Installed Apps Container */}
            <div>
                <InstalledApps showApps={showApps}></InstalledApps>
            </div>
        </div>
    );
};

export default Installation;