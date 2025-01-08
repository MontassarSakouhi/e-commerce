import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useDispatch, useSelector } from 'react-redux';
import { updateSubCategory } from '../../redux/Filters/filtersSlice';

const TypeFilter = () => {
    const typeOptions = ['sweaters', 'jeans', 'shirt', 'sweat', 'shoes'];
    const dispatch = useDispatch()
    const SelectedSubCategories = useSelector(state => state.filters.subCategory)

    return (
        <div className='bg-white py-3 rounded-b-lg'>
            <h2 className='font-semibold text-md pb-2 pl-5'>Sort By Type</h2>
            <div className='px-1 flex justify-around'>
                <Swiper spaceBetween={0} slidesPerView={4.5}>
                    {typeOptions.map((option) => {
                        const isActive = SelectedSubCategories.includes(option)
                        return <SwiperSlide key={option} className='!w-[80px]'>
                            <button
                                onClick={() => {
                                    dispatch(updateSubCategory(option))
                                }}
                                className={`text-xs ${isActive ? 'bg-gray-400 text-white' : 'bg-gray-100'} hover:bg-gray-200 font-medium bg-gray-100 rounded-xl w-[70px] py-1 px-2 `}
                            >
                                {option.charAt(0).toUpperCase() + option.slice(1)}
                            </button>
                        </SwiperSlide>
                    }

                    )}
                </Swiper>
            </div>
        </div>
    );
};

export default TypeFilter;
