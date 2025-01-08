import { useEffect, useState } from "react"
import Title from "../title/Title"
import { useSelector } from "react-redux"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
import ProductItem from "../productItem/ProductItem";

const BestSeller = () => {
    const { products } = useSelector((state) => state.products)
    const [bestSellers, setBestSellers] = useState([])
    useEffect(() => {
        setBestSellers(products.filter((el) => el.bestseller))
        // console.log(bestSellers) 
    }, [])

    return (
        <div>
            <Title text1={"BEST"} text2={"SELLERS"} />

            <p className="pb-12 hidden sm:block sm:text-[14px]   lg:text-[15px]  text-center  sm:px-[100px] md:px-[260px] montserrat  " >Our best sellers combine modern flair with timeless designs, crafted from high-quality materials for lasting style and comfort. These popular pieces are versatile, making them perfect for upgrading any wardrobe with durable, fashionable options that stand the test of time.</p>
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 " > */}
            <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={10}
                slidesPerView={5}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                navigation
                breakpoints={{
                    100: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 5 },
                }}
                pagination={{ clickable: true }}
                className="w-full my-9 shadow-md"
            >
                {bestSellers.map((el) => (
                    <SwiperSlide
                        key={el._id}
                        className="flex justify-center items-center pl-[130px] lg:pl-6 my-2 "
                    >
                        <ProductItem {...el} />
                    </SwiperSlide>
                ))}
            </Swiper>


            {/* </div> */}
        </div>



    )
}

export default BestSeller