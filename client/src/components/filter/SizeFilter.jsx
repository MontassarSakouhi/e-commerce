import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { updateSizes } from '../../redux/Filters/filtersSlice';

const SizeFilter = () => {
    const sizes = ['XS', 'S', 'M', 'L', 'XL'];
    const dispatch = useDispatch()
    const selectedSize = useSelector(state => state.filters.sizes)

    return (
        <div className='bg-white py-3'>
            <h2 className='font-semibold text-md pb-2 pl-5'>Sort By Size</h2>
            <div className='px-7'>
                <Swiper spaceBetween={10} slidesPerView={5}>
                    {sizes.map((size) => {
                        const isActive = selectedSize.includes(size)
                        return <SwiperSlide key={size} className='!w-[50px]'>
                            <button
                                onClick={() => {
                                    dispatch(updateSizes(size))
                                }}

                                className={`text-xs  ${isActive ? 'bg-gray-400 text-white' : 'bg-gray-100'} font-medium hover:bg-gray-500 hover:text-white bg-gray-100 rounded-xl py-1 px-3 !mr-5 w-[40px] `}
                            >
                                {size}
                            </button>
                        </SwiperSlide>
                    }

                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default SizeFilter;
