import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from 'react';

const PriceFilter = ({toggleCategories, handleSelection, handleSelected }) => {
    const priceOptions = [
        { label: 'Price in ascending order', value: '<' },
        { label: 'Price in descending order', value: '>' },
        { label: 'filter only the small prices  ', value: '<<' }
    ];

    return (
        <div className='bg-white py-3'>
            <h2 className='font-semibold text-md pb-2 pl-5'>Sort By Price</h2>
            <div className='px-1'>
                <Swiper spaceBetween={30} slidesPerView={2}>
                    {priceOptions.map((option) => (
                        <SwiperSlide key={option.value}>
                            <button
                                onClick={() => {
                                    handleSelection(option.value)
                                    toggleCategories(option.value)
                                } }
                                className={`text-xs hover:bg-gray-200 font-medium bg-gray-100 rounded-xl w-[150px] py-1 px-3 ${handleSelected[option.value]
                                    ? 'bg-gray-500 text-gray-50 hover:bg-gray-400'
                                    : 'hover:bg-gray-300 bg-gray-100'
                                    }`}
                            >
                                {option.label}
                            </button>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default PriceFilter;
