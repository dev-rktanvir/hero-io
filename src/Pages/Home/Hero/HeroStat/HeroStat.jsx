import React from 'react';
import StatDetails from './StatDetails';

const HeroStat = () => {
    return (
        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] p-10 lg:p-20'>
            <div className='lg:max-w-6xl mx-auto'>
                <h2 className='font-bold text-4xl md:text-5xl text-center text-white'>Trusted by Millions, Built for You</h2>

                {/* Stat Cards */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    <StatDetails
                        title={"Total Downloads"}
                        number={"29.6M"}
                        details={"21% more than last month"}></StatDetails>
                    <StatDetails
                        title={"Total Reviews"}
                        number={"906K"}
                        details={"46% more than last month"}></StatDetails>
                    <StatDetails
                        title={"Active Apps"}
                        number={"132+"}
                        details={"31 more will Launch"}></StatDetails>
                </div>
            </div>
        </div>
    );
};

export default HeroStat;