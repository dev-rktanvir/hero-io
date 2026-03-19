import React from 'react';
import logo from '/logo.png';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className="bg-[#001931]">
            <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-white">

                {/* Brand */}
                <div>
                    <Link to={'/'}>
                        <div className='flex items-center gap-2'>
                            <img className='w-10 h-10' src={logo} alt="" />
                            <h2 className='font-bold leading-6 text-xl'>HERO.IO</h2>
                        </div>
                    </Link>
                    <p className="text-sm mt-3">
                        Discover, explore, and install the best apps effortlessly. Built for developers and creators.
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <h3 className="font-semibold text-xl mb-3">Navigation</h3>
                    <ul className="flex flex-col gap-2 text-sm">
                        <Link to={'/'}>Home</Link>
                        <Link to={'/apps'}>Apps</Link>
                        <Link to={'/installation'}>Installation</Link>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="font-semibold text-xl mb-3">Resources</h3>
                    <ul className="flex flex-col gap-2 text-sm">
                        <Link>Documentation</Link>
                        <Link>API</Link>
                        <Link>Support</Link>
                        <Link>FAQ</Link>
                    </ul>
                </div>

                {/* Community */}
                <div>
                    <h3 className="font-semibold text-xl mb-3">Community</h3>
                    <ul className="flex flex-col gap-2 text-sm">
                        <Link>GitHub</Link>
                        <Link>Contribute</Link>
                        <Link>Discussions</Link>
                        <Link>Feedback</Link>
                    </ul>
                </div>

            </div>

            {/* Bottom */}
            <div className="container mx-auto border-t border-white/15 text-white/50 py-4 text-center text-sm">
                © {new Date().getFullYear()} HERO.IO. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;