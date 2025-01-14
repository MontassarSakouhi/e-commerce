

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';

const ProductSwiper = ({ product, setSwiper }) => {
    return (
        <div className="sm:ml-6 ml-0 w-full max-w-[450px]  relative">
            <Swiper
                onSwiper={setSwiper}
                spaceBetween={50}
                slidesPerView={1}
            >
                {product.image.map((el, index) => (
                    <SwiperSlide key={index} className="">
                        <img
                            className="w-full  h-auto aspect-square sm:aspect-auto object-center sm:object-cover object-contain"
                            src={el}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};


export default ProductSwiper