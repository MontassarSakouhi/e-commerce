

import { UserPen, LogOut, ClockArrowUp, BadgePlus, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const SideBar = () => {
    const navigate = useNavigate()
    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/', { replace: true })
    }


    return (
        <div className='min-w-[200px] h-full playfair-display bg-gray-800 rounded-r  ' >
            <div className=" pt-[150px] flex flex-col items-end gap-8 ">
                <div onClick={() => navigate('/admin/add')} className='p-2 hover:text-gray-200 border w-[150px] rounded-l-full cursor-pointer ' >
                    <div className='flex justify-around' >
                        <BadgePlus />

                        Add Product
                    </div>
                </div>
                <div onClick={() => navigate('/admin/product')} className='p-2 hover:text-gray-200 border w-[150px] rounded-l-full cursor-pointer ' >
                    <div className='flex justify-around' >
                        <List />
                        Product List
                    </div>
                </div>
                <div onClick={() => navigate('/admin/order')} className='p-2 hover:text-gray-200 border w-[150px] rounded-l-full cursor-pointer ' >
                    <div className='flex justify-around' >
                        <ClockArrowUp />
                        Order List
                    </div>
                </div>
                <div onClick={() => navigate('/admin/user')} className='p-2 hover:text-gray-200 border w-[150px] rounded-l-full cursor-pointer ' >
                    <div className='flex justify-around' >
                        <UserPen />
                        Users List
                    </div>
                </div>

            </div>
            <div className=' flex justify-center ' >
                <div onClick={() => { handleLogout() }} className='flex py-1  w-[130px] gap-4  mt-[300px] justify-center items-end border rounded-full bg-gray-800 cursor-pointer hover:text-gray-200  ' >
                    <LogOut />
                    Logout
                </div>
            </div>

        </div>
    )
}

export default SideBar