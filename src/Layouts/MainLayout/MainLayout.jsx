import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <div>
            {/* Header */}
            <header>
                <Navbar></Navbar>
            </header>

            {/* Main */}
            <Outlet></Outlet>

            {/* Footer */}
            <footer>

            </footer>
        </div>
    );
};

export default MainLayout;