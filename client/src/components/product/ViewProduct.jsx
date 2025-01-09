

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ProductSwiper from './ProductSwiper';
import SideImages from './SideImages';
import ProductInfo from './ProductInfo';
import Title from '../title/Title';
import RecommandedProducts from './RecommandedProducts';

const ViewProduct = () => {
    const { productId } = useParams()
    const { products } = useSelector(state => state.products)
    const product = products.filter(el => el._id === productId)[0]
    const [swiper, setSwiper] = useState(null);

    return (
        <div>
            <div className={'flex flex-col items-center sm:items-start  sm:flex-row sm:justify-normal justify-center py-6'} >

                <SideImages product={product} swiper={swiper} />
                <ProductSwiper product={product} setSwiper={setSwiper} />
                <ProductInfo product={product} />
            </div >
            <div>
                <Title text1={'Recommanded'} text2={'Products'} />
                <RecommandedProducts product={product} />
            </div>
        </div>
    )
}

export default ViewProduct