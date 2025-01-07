import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const TypeFilter = ({ toggleCategories, handleSelected, handleSelection }) => {
    const typeOptions = [
        { label: 'Sweaters', value: 'sweaters' },
        { label: 'Jeans', value: 'jeans' },
        { label: 'Shirt', value: 'shirt' },
        { label: 'Sweat', value: 'sweat' },
        { label: 'Shoes', value: 'shoes' }
    ];

    return (
        <div className='bg-white py-3 rounded-b-lg'>
            <h2 className='font-semibold text-md pb-2 pl-5'>Sort By</h2>
            <div className='px-1 flex justify-around'>
                <Swiper spaceBetween={0} slidesPerView={4.5}>
                    {typeOptions.map((option) => (
                        <SwiperSlide key={option.value} className='!w-[80px]'>
                            <button
                                onClick={() => {
                                    handleSelection(option.value)
                                    toggleCategories(option.value)
                                }
                                }
                                className={`text-xs hover:bg-gray-200 font-medium bg-gray-100 rounded-xl w-[70px] py-1 px-2 ${handleSelected[option.value]
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

export default TypeFilter;
