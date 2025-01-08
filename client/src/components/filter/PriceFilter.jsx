import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updatePriceSort } from '../../redux/Filters/filtersSlice';

const PriceFilter = () => {
    const dispatch = useDispatch()
    const selectedPrice = useSelector(state => state.filters.priceSort)
    const priceOptions = [
        { label: 'Price in ascending order', value: 'low' },
        { label: 'Price in descending order', value: 'high' },
        { label: 'filter only the small prices  ', value: 'equals' }
    ];


    return (
        <div className='bg-white py-3'>
            <h2 className='font-semibold text-md pb-2 pl-5'>Sort By Price</h2>
            <div className='px-1'>
                <Swiper spaceBetween={30} slidesPerView={2}>
                    {priceOptions.map((option) => {

                        return (<SwiperSlide key={option.value}>
                            <button
                                onClick={() => dispatch(updatePriceSort(option.value))}
                                className={`text-xs transition ${selectedPrice === option.value ? 'bg-gray-400 text-white' : 'bg-gray-100'}  text-xs hover:bg-gray-500 hover:text-white font-medium bg-gray-100 rounded-xl w-[150px] py-1 px-3 `}

                            >
                                {option.label}
                            </button>
                        </SwiperSlide>)
                    })}
                </Swiper>
            </div>
        </div>
    );
};

export default PriceFilter;
