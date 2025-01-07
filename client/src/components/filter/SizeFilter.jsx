import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const SizeFilter = ({ toggleCategories, handleSelected, handleSelection }) => {
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];

    return (
        <div className='bg-white py-3'>
            <h2 className='font-semibold text-md pb-2 pl-5'>Size</h2>
            <div className='px-7'>
                <Swiper spaceBetween={10} slidesPerView={5}>
                    {sizes.map((size) => (
                        <SwiperSlide key={size} className='!w-[50px]'>
                            <button
                                onClick={() => {
                                    handleSelection(size.toLowerCase())
                                    toggleCategories(size.toLowerCase())
                                }}

                                className={`text-xs font-medium rounded-xl py-1 px-3 !mr-5 w-[40px] ${handleSelected[size.toLowerCase()]
                                    ? 'bg-gray-500 text-gray-50 hover:bg-gray-400'
                                    : 'bg-gray-100 hover:bg-gray-300 text-black'
                                    }`}
                            >
                                {size}
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default SizeFilter;
