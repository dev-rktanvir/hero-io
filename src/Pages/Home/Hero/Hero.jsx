import React from 'react';
import HeroStat from './HeroStat/HeroStat';
import HeroContent from './HeroContent/HeroContent';

const Hero = () => {
    return (
        <div className='py-10 lg:py-20'>
            {/* Content & Image part */}
            <div className='px-3'>
                <HeroContent></HeroContent>
            </div>

            {/* Stat Part */}
            <div>
                <HeroStat></HeroStat>
            </div>
        </div>
    );
};

export default Hero;