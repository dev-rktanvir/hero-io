import React from 'react';
import InstallDetails from '../InstallDetails/InstallDetails';

const InstalledApps = ({ showApps, handleUninstall }) => {
    return (
        <div className='mt-5'>
            {
                showApps.map(insApp => <InstallDetails
                    key={insApp.id}
                    insApp={insApp}
                    handleUninstall={handleUninstall}></InstallDetails>)
            }
        </div>
    );
};

export default InstalledApps;