import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CartPurchase = ({ cartItems, products,setOpen }) => {
    const [price, setPrice] = useState(0);
    const { currency } = useSelector(state => state.products)
    const { validCode } = useSelector(state => state.cart)
    const navigate =useNavigate()

    const getTotalPrice = (cartItems, products) => {
        const total = cartItems.reduce((total, item) => {
            const product = products.find(product => product._id === item._id);
            if (product) {
                total += product.price * item.quantity;
            }
            return total;
        }, 0);
        if (validCode) {
            setPrice(total - total * 5 / 100);
        } else {
            setPrice(total);
        }
    };

    useEffect(() => {
        getTotalPrice(cartItems, products);
    }, [cartItems, products,validCode]);

    return (
        <div className='fixed bottom-0 w-[378px] bg-white p-4 border-t-[1px] shadow-md'>
            <div className='flex justify-between items-center'>
                <div className='text-lg font-semibold'>
                    Total <span className='text-gray-500 text-xs '>Including VAT</span>
                </div>
                <div className='text-xl font-bold'>
                    {price} <span className='text-[15px]'>{currency}</span>
                    {validCode && <span className='text-xs text-green-500 ml-2'>(5% Discount)</span>}
                </div>
            </div>
            <button disabled={!price} onClick={()=>{
                navigate('/place-order')
                setOpen(false)
                }} className='mt-4 w-full text-[17px] py-3 bg-gray-500 text-white font-semibold rounded-full active:bg-gray-800 hover:bg-gray-600'>
                Process Order
            </button>
        </div>
    );
};

export default CartPurchase;
