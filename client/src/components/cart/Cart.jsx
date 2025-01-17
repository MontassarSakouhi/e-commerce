import { useSelector } from "react-redux"
import { useEffect } from "react"
import CartItem from "./CartItem"
import { useState } from "react"
import RedeemCode from "./RedeemCode"
import CartPurshase from "./CartPurshase"



const Cart = ({ setOpen }) => {
    const { products } = useSelector(state => state.products)
    const { cart } = useSelector(state => state.cart)
    const [cartItems, setCartItems] = useState([])


    useEffect(() => {
        const tempCartData = []
        for (const items in cart) {
            for (const item in cart[items]) {
                tempCartData.push({
                    _id: items,
                    size: item,
                    quantity: cart[items][item]
                })
            }
        }
        setCartItems(tempCartData)
    }, [cart])



    return (
        <div>
            <div className="relative w-full p-1 h-[580px] overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-400 hover:scrollbar-thumb-gray-600 hover:scrollbar-thumb-rounded-md">
                {
                    cartItems.map((el, i) => <CartItem key={i} {...el} products={products} />)
                }

                <RedeemCode />



            </div>
            <CartPurshase cartItems={cartItems} products={products} setOpen={setOpen} />

        </div>

    )
}

export default Cart