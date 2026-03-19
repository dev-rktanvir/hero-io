import React from 'react';
import googlePlay from '../../../../assets/google-play.png';
import appleStore from '../../../../assets/apple-store.png';
import heroImg from '../../../../assets/hero.png';

const HeroContent = () => {
    return (
        <div className='container mx-auto'>
            {/* Content part */}
            <div>
                <div>
                    <h1 className='font-bold text-4xl md:text-7xl md:leading-20 text-primary text-center'>We Build <br /> <span className='gradient-clr'>Productive</span> Apps</h1>
                    <p className='text-xl text-secondary lg:text-center text-justify lg:max-w-10/12 mx-auto mt-6 lg:mt-4'>
                        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.
                    </p>
                </div>
                {/* Buttons */}
                <div className='flex items-center justify-center gap-4 my-10'>
                    {/* Play store Button */}
                    <a href="https://play.google.com/store/apps?hl=en"
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className='flex items-center justify-center gap-2 lg:gap-2.5 px-3 py-3 rounded-sm border border-[#D2D2D2] cursor-pointer lg:w-52'>
                            <img src={googlePlay} alt="" />
                            <p className='md:text-xl font-semibold text-primary'>Google Play</p>
                        </button>
                    </a>

                    {/* App store button */}
                    <a href="https://www.apple.com/app-store/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className='flex items-center justify-center gap-2 lg:gap-2.5 px-6 py-3 rounded-sm border border-[#D2D2D2] cursor-pointer lg:w-52'>
                            <img src={appleStore} alt="" />
                            <p className='md:text-xl font-semibold text-primary'>App Store</p>
                        </button>
                    </a>
                </div>
            </div>
            {/* Iamge part */}
            <div className='flex items-center justify-center'>
                <img src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default HeroContent;