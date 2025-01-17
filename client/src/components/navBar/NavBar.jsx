import { assets } from '../../assets/assets/assets.js'
import { NavLink, Link } from 'react-router-dom'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleSearch } from '../../redux/search/searchSlice.jsx'
import { Drawer } from 'antd';
import Cart from '../cart/Cart.jsx'
import Login from '../login/Login.jsx'
import { useMediaQuery } from "@uidotdev/usehooks";


const NavBar = () => {
    const dispatch = useDispatch()
    const { cartCount } = useSelector(state => state.cart)
    const [visible, setVisible] = useState(false)
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const [profileDrawerVisible, setProfileDrawerVisible] = useState(false);
    const isSmallDevice = useMediaQuery("only screen and (max-width : 640px)");

    const showLoading = () => {
        setOpen(true);
        setLoading(true);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    return (
        <div className='flex  item-center justify-between py-5 font-medium border-b-[1px] ' >
            <Link to={'/'}> <img src={assets.logo} alt="" className='w-64 p-0' /></Link>
            <ul className='hidden sm:flex items-center gap-5 text-sm text-gray-700   ' >
                <NavLink to={'/'} >
                    <p>HOME</p>
                    <hr className='hidden w-2/4 border-none h-[1.5px] bg-gray-700' />
                </NavLink>
                <NavLink to={'/collection'} >
                    <p>COLLECTION</p>
                    <hr className='hidden w-2/4 border-none h-[1.5px] bg-gray-700' />
                </NavLink>
                <NavLink to={'/about'} >
                    <p>ABOUT</p>
                    <hr className='hidden w-2/4 border-none h-[1.5px] bg-gray-700' />
                </NavLink>
                <NavLink to={'/contact'} >
                    <p>CONTACT</p>
                    <hr className='hidden w-2/4 border-none h-[1.5px] bg-gray-700' />
                </NavLink>

            </ul>
            <div className='flex gap-6 items-center' >
                <img src={assets.search_icon} onClick={() => dispatch(toggleSearch(true))} alt="" className='w-5 cursor-pointer' />
                <div className='group relative' >
                    <img
                        src={assets.profile_icon}
                        alt=""
                        className='w-5 cursor-pointer'
                        onClick={() => setProfileDrawerVisible(true)}
                    />

                    <div className='group-hover:block hidden absolute dropdown-menu pos right-[-50px] pt-4  ' >
                        <div className='flex flex-col gap-2 w-32 py-6 px-5 bg-slate-100 text-gray-700 rounded-lg'>
                            <p className='hover:text-black hover:underline cursor-pointer text-center' >My Profile</p>
                            <p className='hover:text-black hover:underline cursor-pointer text-center' >Orders</p>
                            <p className='hover:text-black hover:underline cursor-pointer text-center' >Logout</p>
                        </div>
                    </div>
                </div>

                <div onClick={showLoading} className='relative cursor-pointer' >
                    <img src={assets.cart_icon} alt="" className='w-5 min-w-5' />
                    <p className='absolute text-[10px] right-[-5px] top-[10px] text-white bg-black w-4 text-center rounded-full ' > {cartCount} </p>
                </div>
                <Drawer
                    closable
                    destroyOnClose
                    title={<p>Welcome to your cart</p>}
                    open={open}
                    loading={loading}
                    onClose={() => setOpen(false)}
                    styles={{ body: { height: '80%', padding: 0 } }}
                    className='my-2 !p-0 !mr-8 rounded-lg '
                >
                    <Cart setOpen={setOpen} />
                </Drawer>

                <Drawer
                    closable
                    destroyOnClose
                    title={<p>Login / Register</p>}
                    open={profileDrawerVisible}
                    styles={{ body: { height: '80%', padding: 0 } }}
                    onClose={() => setProfileDrawerVisible(false)}
                    className='my-2 !p-0 !mr-8 rounded-lg '
                    width={isSmallDevice ? "100%" : "24%"}
                >
                    <Login />
                </Drawer>

                <img onClick={() => setVisible(true)} src={assets.menu_icon} alt="" className='w-5 sm:hidden cursor-pointer' />
            </div>
            <div className={`absolute  top-0 right-0 bottom-0 h-[250px] font-normal transition-all  ${visible ? 'w-full' : 'hidden'}  bg-white z-[9999]`} >
                <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 mb-5 bg-slate-50 w-[100px] m-1 rounded-lg ' >
                    <img src={assets.dropdown_icon} alt="" className='w-3 rotate-180' />
                    <p>Back</p>
                </div>
                <div className='flex flex-col  ' >
                    <NavLink onClick={() => setVisible(false)} to={'/'} className='p-2 pl-5 border-t-2 ' >
                        <p>HOME</p>
                    </NavLink>
                    <NavLink onClick={() => setVisible(false)} to={'/collection'} className='p-2 pl-5 border-t-2' >
                        <p>COLLECTION</p>
                    </NavLink>
                    <NavLink onClick={() => setVisible(false)} to={'/about'} className='p-2 pl-5 border-t-2' >
                        <p>ABOUT</p>
                    </NavLink>
                    <NavLink onClick={() => setVisible(false)} to={'/contact'} className='p-2 pl-5 border-t-2' >
                        <p>CONTACT</p>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default NavBar
