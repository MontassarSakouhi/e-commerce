import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ViewProduct from '../components/product/ViewProduct';

const Product = () => {
  const [swiper, setSwiper] = useState(null);

  const changeSlide = (index) => {
    if (swiper) {
      swiper.slideTo(index);
    }
  };

  return (
    <div>
    <ViewProduct/>
    </div>
  );
};

export default Product;
