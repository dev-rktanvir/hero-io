import React, { useState } from 'react';
import logo from '/logo.png';
import { Link, NavLink } from 'react-router';
import { FaBars, FaGithub } from 'react-icons/fa';

const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    return (
        <>
            <nav className='bg-white border-b border-[#E9E9E9] shadow-sm'>
                {/* NavBar */}
                <div className='container mx-auto px-3 py-4 flex items-center justify-between'>
                    {/* Left side */}
                    <Link to={'/'}>
                        <div className='flex items-center gap-2'>
                            <img className='w-10 h-10' src={logo} alt="" />
                            <h2 className='font-bold leading-6 text-xl'>HERO.IO</h2>
                        </div>
                    </Link>

                    {/* Middle Side */}
                    <div className='hidden lg:flex items-center gap-8 font-medium text-base text-black'>
                        <NavLink to={'/'}>Home</NavLink>
                        <NavLink to={'/apps'}>Apps</NavLink>
                        <NavLink to={'/installation'}>My Installation</NavLink>
                    </div>

                    {/* Right side */}
                    <div>
                        <a href="https://github.com/dev-rktanvir/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className='hidden lg:flex items-center gap-2.5 px-4 py-3 rounded-sm bg-linear-to-r from-[#632EE3] to-[#9F62F2] cursor-pointer'>
                                <FaGithub className='text-white' size={20} />
                                <h2 className='font-semibold text-white'>Contribute</h2>
                            </button>
                        </a>
                        <FaBars onClick={() => setOpenMenu(!openMenu)} className='lg:hidden text-[#632EE3]' size={32} />
                    </div>
                </div>
            </nav>
            {/* Nav for mobile */}
            {
                openMenu &&
                <div className='flex flex-col px-3 text-black shadow-md'>
                    <Link onClick={() => setOpenMenu(false)} className="hover:text-white p-4 hover:bg-[#9F62F2]" to={'/'}>Home</Link>
                    <Link onClick={() => setOpenMenu(false)} className="hover:text-white p-4 hover:bg-[#9F62F2]" to={'/apps'}>Apps</Link>
                    <Link onClick={() => setOpenMenu(false)} className="hover:text-white p-4 hover:bg-[#9F62F2]" to={'/installation'}>My Installation</Link>
                </div>
            }
        </>
    );
};

export default Navbar;