import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Axios } from "../../services/api";
import { Spin } from "antd";
import { setProducts } from "../../redux/Products/productsSlice";
import { Select } from "antd";

const ListOrders = () => {
  const { products, currency } = useSelector(state => state.products);
  const [isLoading, setIsLoading] = useState(false)
  const [filteredProducts, setFilteredProducts] = useState([])
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        if (!products.length) {
          const response1 = await Axios.get('/product/list');
          dispatch(setProducts(response1.data.products));
        }

        const response = await Axios.get('/order/getOrders');

        const orderItems = response.data.flatMap(order =>
          order.items.flatMap(item =>
            item.items.map(subItem => {
              const product = products.find(p => p._id === subItem.itemId);
              return {
                userId: order.userId,
                orderId: order._id,
                itemId: subItem._id,
                product,
                size: subItem.size ? Object.keys(subItem.size)[0] : null,
                quantity: subItem.size ? subItem.size[Object.keys(subItem.size)[0]] : null,
                status: subItem.status || null,
                date: order.createdAt,
                deliveryInfo: subItem.deliveryInfo || null,
              };
            })
          )
        );
        setFilteredProducts(orderItems);
        console.log(orderItems)
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error('Error fetching products:', error);
      }
    };

    fetchData();
  }, [products]);
  const handleStatusChange = async (value, orderId,itemId) => {
    try {
      await Axios.put(`/order/updateStatus/${orderId}`, { status: value,itemId:itemId });
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  return (
    <div className="border-t pt-16 px-4">
      {isLoading ? (
        <div className="flex justify-center items-center">
          <Spin />
        </div>
      ) : (
        <div>
          {filteredProducts.length > 0 ? (
            filteredProducts.map((el, i) => (
              <div
                key={i}
                className="py-6 border-t border-b text-gray-700 flex flex-col md:flex-row md:justify-between gap-6"
              >
                <div className="flex items-start gap-6 text-sm sm:text-base">
                  <img src={el.product.images[0]} className="w-16" alt="" />
                  <div>
                    <p className="font-medium text-lg">{el.product.name}</p>
                    <div className="flex items-center gap-3 mt-2 text-base">
                      <p className="text-lg">
                        {el.product?.price}{" "}
                        <span className="font-semibold text-[14px]">{currency}</span>
                      </p>
                      <p className="text-sm">Quantity: {el.quantity}</p>
                      <p className="text-sm">Size: {el.size}</p>
                    </div>
                    <p className="mt-2 text-sm">
                      Date:{" "}
                      <span className="text-gray-400">
                        {new Date(el.date).toLocaleDateString()}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="md:w-1/3 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm">
                    <p className="min-w-2 h-2 rounded-full bg-green-500"></p>
                    <Select
                      defaultValue={el.status}
                      onChange={(value) => handleStatusChange(value, el.userId,el.itemId)}
                      options={[
                        { value: "pending", label: "Pending" },
                        { value: "shipped", label: "Shipped" },
                        { value: "delivered", label: "Delivered" },
                      ]}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No orders found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ListOrders;
