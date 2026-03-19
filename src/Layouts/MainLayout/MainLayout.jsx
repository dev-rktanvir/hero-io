import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            {/* Header */}
            <header>
                <Navbar></Navbar>
            </header>

            {/* Main */}
            <main>
                <Outlet></Outlet>
            </main>

            {/* Footer */}
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayout;