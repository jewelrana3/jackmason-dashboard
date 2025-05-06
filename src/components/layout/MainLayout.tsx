import React from 'react';

import { Outlet } from 'react-router-dom';
import HeaderDashboard from './HeaderDashboard';

import Sidebar from './Sideber';

const MainLayout: React.FC = () => {
    return (
        <div className="grid grid-cols-12 gap-5">
            <div className="col-span-2 h-screen ">
                <Sidebar />
            </div>

            {/* main container with header */}
            <div className="col-span-10 ">
                <div className="flex items-center justify-end px-2">
                    <HeaderDashboard />
                </div>

                <div className="px-2">
                    <div className=" rounded-md">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
