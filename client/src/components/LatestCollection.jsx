import { useSelector } from "react-redux"
import Title from "./title"
import { useEffect, useState } from "react"
import ProductItem from "./ProductItem"






const LatestCollection = () => {
  const { products } = useSelector((state) => state.products)
  const [latestProducts, setLatestProducts] = useState([])

  useEffect(() => {
    setLatestProducts(products.slice(0, 10))
    console.log(latestProducts)
  }, [])

  // console.log(products)
  return (
    <div className="flex flex-col items-center my-8">
      <Title title1={"LATEST"} title2={"COLLECTION"} />
      <p className="pb-6 hidden sm:block sm:text-[14px]   lg:text-[15px]  text-center px-36" >The latest collection features a mix of modern and timeless designs, crafted with high-quality materials for both style and comfort. It offers a variety of versatile pieces, perfect for elevating any wardrobe with durable and fashionable options.</p>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6 " >

        {
          latestProducts.map((el, i) =>
            <ProductItem {...el} key={el._id} />
          )
        }

      </div>
    </div>
  )
}

export default LatestCollection