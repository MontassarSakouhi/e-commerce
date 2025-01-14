import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCartQuantity } from "../../redux/cart/cartSlice";




const CartItemQuantity = ({ quantity, _id, size }) => {

    const [count, setCount] = useState(quantity);
    const { cart } = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const increment = () => {
        const newCount = count + 1;
        setCount(newCount);
        dispatch(updateCartQuantity({ _id, size, quantity: newCount }));
    };

    const decrement = () => {
        if (count > 1) {
            const newCount = count - 1;
            setCount(newCount);
            dispatch(updateCartQuantity({ _id, size, quantity: newCount }));
        }
    };
    return (
        <div className="flex items-center border rounded-full w-[180px] justify-between  px-4 py-[2px] ">
            <button
                onClick={decrement}
                className="text-lg font-bold text-gray-600 hover:text-gray-800"
            >
                –
            </button>
            <span className="text-base font-medium">{count}</span>
            <button
                onClick={increment}
                className="text-lg font-bold text-gray-600 hover:text-gray-800"
            >
                +
            </button>
        </div>
    )
}

export default CartItemQuantity