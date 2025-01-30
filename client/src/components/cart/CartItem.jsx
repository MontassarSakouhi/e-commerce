import { useSelector } from "react-redux"
import CartItemQuantity from "./CartItemQuantity"
import DeleteCartItem from "./DeleteCartItem"



const CartItem = ({ _id, size, quantity, products }) => {
    const { currency } = useSelector(state => state.products)
    const product = products.find(el => el._id === _id)

    return (
        <div className=' p-2 border-b-[1px] ' >
            <div className='flex' >
                <img className=' h-[150px] ' src={product.images[1]} alt="" />
                <div className='px-4' >
                    <p className='text-[14px] ' > {product.name} </p>
                    <p className='font-semibold' > {product.price} {currency} </p>
                    <p className='text-gray-500' > {quantity} {quantity !== 1 ? 'units' : 'unit'} | {size} </p>
                    <div className='flex items-center mt-12 gap-2' >
                        <CartItemQuantity quantity={quantity} _id={_id} size={size} />
                        <DeleteCartItem _id={_id} size={size} />
                    </div>

                </div>
            </div>


        </div>
    )
}

export default CartItem