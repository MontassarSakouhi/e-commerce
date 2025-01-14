import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import ViewProduct from '../components/product/ViewProduct';
import { useEffect } from 'react';

const Product = () => {
  useEffect(() => {
    window.scroll({ top: 0 })
  }, []);

  return (
    <div>
      <ViewProduct />
    </div>
  );

};



export default Product;
