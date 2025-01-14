import { useSelector } from "react-redux"
import { useEffect } from "react"
import CartItem from "./CartItem"
import { useState } from "react"
import RedeemCode from "./RedeemCode"
import CartPurshase from "./CartPurshase"



const Cart = ({setOpen}) => {
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
        <div className='  w-full p-1 h-full mb-[500px] ' >
            {
                cartItems.map((el, i) => <CartItem key={i} {...el} products={products} />)
            }

          <RedeemCode />

         <CartPurshase cartItems={cartItems} products={products} setOpen={setOpen} />

        </div>
    )
}

export default Cart