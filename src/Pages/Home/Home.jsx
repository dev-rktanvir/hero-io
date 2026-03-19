import React from 'react';
import Hero from './Hero/Hero';
import TrendingApps from './TrendingApps/TrendingApps';
import { useLoaderData } from 'react-router';

const Home = () => {
    const allApps = useLoaderData();
    return (
        <div>
            {/* Hero Section */}
            <section>
                <Hero></Hero>
            </section>

            {/* Trending Apps */}
            <section>
                <TrendingApps allApps={allApps}></TrendingApps>
            </section>
        </div>
    );
};

export default Home;