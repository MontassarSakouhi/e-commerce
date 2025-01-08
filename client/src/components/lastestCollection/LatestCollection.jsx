
import { useSelector } from "react-redux"
import Title from "../title/Title"
import { useEffect, useState } from "react"
import ProductItem from "../productItem/ProductItem"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';




const LatestCollection = () => {
  const { products } = useSelector((state) => state.products)
  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    setLatestProducts(products.slice(0, 10))
    // console.log(latestProducts)
  }, [])

  // console.log(products)
  return (
    <div className="flex flex-col items-center py-8">
      <Title text1={"LATEST"} text2={"COLLECTION"} />
      <p className="pb-12 hidden sm:block sm:text-[14px]   lg:text-[15px]  text-center  sm:px-[100px] md:px-[260px] montserrat  " >The latest collection features a mix of modern and timeless designs, crafted with high-quality materials for both style and comfort. It offers a variety of versatile pieces, perfect for elevating any wardrobe with durable and fashionable options.</p>
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 " > */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        slidesPerView={5}
        autoplay={{
          delay: 4000,
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
        {latestProducts.map((el) => (
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

export default LatestCollection