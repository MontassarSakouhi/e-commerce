import { useSelector } from "react-redux";
import Title from "../components/title/Title";

const Orders = () => {
  const { products, currency } = useSelector(state => state.products);

  return (
    <div className="border-t pt-16 px-4">
      <div className="flex ">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>
      <div className="">
        {products.slice(1, 4).map((el, i) => (
          <div
            key={i}
            className="py-6 border-t border-b text-gray-700 flex flex-col md:flex-row md:justify-between gap-6"
          >
            <div className="flex items-start gap-6 text-sm sm:text-base">
            <img src={el.images[0]} className='w-16' alt="" />
              <div>
                <p className="font-medium text-lg">{el.name}</p>
                <div className="flex items-center gap-3 mt-2 text-base">
                  <p className="text-lg">
                    {el.price} <span className="font-semibold text-[14px]">{currency}</span>
                  </p>
                  <p className="text-sm">Quantity: 1</p>
                  <p className="text-sm">Size: M</p>
                </div>
                <p className="mt-2 text-sm">
                  Date: <span className="text-gray-400">25 Jul, 2024</span>
                </p>
              </div>
            </div>
            <div className="md:w-1/3 flex justify-between items-center">
              <div className="flex items-center gap-2 text-sm">
                <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                <p>Ready to ship</p>
              </div>
              <button className="border border-gray-300 px-4 py-2 text-sm font-medium rounded-md hover:bg-gray-100 active:bg-gray-200 transition-colors">
                Track Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
