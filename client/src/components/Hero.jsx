
import "swiper/css";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { assets } from '../assets/assets/assets'
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

function Hero() {
    return (
        <div className='border rounded h-[600px]  sm:h-[400px] flex flex-col sm:flex-row w-full my-[40px]  sm:my-[70px] sm:mb-[50px] '>

            <div className='flex-1 font-bold flex flex-col items-center justify-center'>
                <div className='flex items-center gap-3'>
                    <p className='w-[30px] sm:w-[50px] h-[2px] bg-black'></p>
                    <p className='text-1md lg:text-1xl'>Discover Our Top Picks</p>
                </div>
                <h1 className='text-3xl lg:text-5xl m-2 playfair-display text-gray-700'>Latest Arrivals</h1>
                <div className='flex items-center mt-3 gap-3'>
                    <p>Start Shopping</p>
                    <p className='w-[30px] sm:w-[50px] h-[2px] bg-black'></p>
                </div>
            </div  >




            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                modules={[Pagination, Autoplay]}
                autoplay={{
                    delay: 8000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className="  w-full !h-full flex-1"
            >
                <SwiperSlide >
                    <img
                        className="w-full !h-full aspect-auto object-left object-cover"
                        src={assets.hero_img}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full  !h-full aspect-auto object-center object-cover"
                        src={assets.hero2_img}
                        alt=""
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full !h-full aspect-auto object-right object-cover"
                        src={assets.hero1_img}
                        alt=""
                    />
                </SwiperSlide>


            </Swiper>




        </div>


    )
}


export default Hero