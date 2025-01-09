

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useState } from 'react';

const ProductSwiper = ({ product, setSwiper }) => {



    return (
        <div className=" ml-6 min-w-[450px] max-w-[450px] max-h-[400px] sm:max-h-[640px] relative overflow-hidden">
            <Swiper
                onSwiper={setSwiper}
                spaceBetween={50}
                slidesPerView={1}

            >
                {product.image.map((el, index) => (
                    <SwiperSlide key={index} className="w-full h-[300px]">
                        <img
                            className="object-cover h-full w-full"
                            src={el}

                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default ProductSwiper