import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import AppStat from './AppStat/AppStat';
import Chart from './Chart/Chart';

const AppDetails = () => {

    // Get dynamic Id
    const appId = useParams();
    const convertedAppId = parseInt(appId.id);

    // Find spesific app
    const allApps = useLoaderData();
    const appData = allApps.find(app => app.id === convertedAppId);

    return (
        <div className='container mx-auto px-3 py-10 lg:py-20'>
            <AppStat appData={appData}></AppStat>

            <div className='py-10'>
                <h2 className='font-semibold text-2xl text-primary'>Ratings</h2>
                <Chart appData={appData}></Chart>
            </div>

            {/* Description */}
            <div className='mt-10'>
                <h2 className='font-semibold text-2xl text-primary'>Description</h2>
                <p className='text-xl leading-8 text-secondary mt-6'>
                    {appData.description}
                </p>
            </div>
        </div>
    );
};

export default AppDetails;