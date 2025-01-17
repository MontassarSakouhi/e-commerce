

import React from 'react'
import SideBar from './SideBar'
import { Outlet, useLocation } from 'react-router-dom'

const AdminDashboard = () => {
    const location = useLocation()
    return (
        <div className="bg-gray-900 text-white w-full flex h-full">
            <SideBar />
            <div className="py-4 px-10">
                {location.pathname === '/admin' ? <div className='flex justify-center items-center text-[60px] ' > Welcome to the admin dashbord   </div> : <Outlet />
                }

            </div>

        </div>

    )
}

export default AdminDashboard