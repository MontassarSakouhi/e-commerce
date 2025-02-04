import { useDispatch, useSelector } from "react-redux";
import Title from "../components/title/Title";
import { useEffect, useState } from "react";
import { Axios } from "../services/api";
import { Spin } from "antd";
import { setProducts } from "../redux/Products/productsSlice";

const Orders = () => {
  const { products, currency } = useSelector(state => state.products);
  const [isLoading, setIsLoading] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response1 = await Axios.get('/product/list');
        dispatch(setProducts(response1.data.products));

        const response = await Axios.get('/order/getOne');
        const orderItems = response.data.items.map(el => {
          if (el.items && el.items.length > 0) {
            const item = el.items[0];
            return {
              itemId: item.itemId,
              size: Object.keys(item.size)[0],
              quantity: item.size[Object.keys(item.size)[0]],
              status: item.status,
              date: response.data.createdAt,
            };
          }
          return null;
        }).filter(product => product !== null);

        const filteredProducts = await orderItems.map(el => ({
          product: products.find(product => product._id === el.itemId),
          order: el
        }))
        setFilteredProducts(filteredProducts)

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Error fetching products:', error);
      }
    })();
  }, []);



  return (
    <div className="border-t pt-16 px-4">
      <div className="flex ">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      {isLoading ? <div className="flex justify-center items-center" >  <Spin /> </div> : <div className="">
        {filteredProducts.filter(el=>el.order.status!=='delivered').map((el, i) => ( 
          <div
            key={i}
            className="py-6 border-t border-b text-gray-700 flex flex-col md:flex-row md:justify-between gap-6"
          >
            <div className="flex items-start gap-6 text-sm sm:text-base">
              <img src={el.product.images[0]} className='w-16' alt="" />
              <div>
                <p className="font-medium text-lg">{el.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base">
                  <p className="text-lg">
                    {el.price} <span className="font-semibold text-[14px]"> {el.order.quantity * el.product.price } {currency}</span>
                  </p>
                  <p className="text-sm">Quantity:  {el.order.quantity} </p>
                  <p className="text-sm">Size: {el.order.size} </p>
                </div>
                <p className="mt-2 text-sm">
                  Date: <span className="text-gray-400">{new Date(el.order.date).toLocaleDateString()}</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p> {el.order.status.toUpperCase()} </p>
              </div>

            </div>
          </div>
        ))}
      </div>}

    </div>
  );
};

export default Orders;
