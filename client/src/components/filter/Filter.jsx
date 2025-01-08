import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Drawer } from 'antd';
import PriceFilter from './PriceFilter';
import SizeFilter from './SizeFilter';
import CategoryFilter from './CategoryFilter';
import TypeFilter from './TypeFilter';
import { useEffect } from 'react';

const Filter = () => {
    const [open, setOpen] = useState(false);
    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className="px-10 flex justify-end montserrat">
            <div>
                <button
                    onClick={() => setOpen(true)}
                    className="border-[1px] border-black rounded-xl px-3 py-2 font-[500] hover:scale-[1.02] hover:bg-gray-200">
                    Filter By
                </button>
                <Drawer
                    styles={{
                        body: { padding: 0, margin: 0 },
                        wrapper: {
                            width: '350px',
                            height: '460px',
                            top: '50px',
                            right: '70px',
                            borderRadius: '25px',
                            backgroundColor: '#E2E8F0',
                            boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
                            overflow: 'hidden',
                        }

                    }}

                    title="Filter By"
                    onClose={onClose}
                    open={open}
                    className="custom-drawer">
                    <div className="flex flex-col space-y-2 bg-slate-200 w-[350px] h-[400px] rounded-b-xl shadow-2xl">
                        <CategoryFilter  />
                        <PriceFilter />
                        <SizeFilter />
                        <TypeFilter />
                    </div>
                </Drawer>
            </div>
        </div>
    );
};

export default Filter;
