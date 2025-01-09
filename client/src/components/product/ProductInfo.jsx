
import { Heart } from 'lucide-react';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Select } from "antd";
import { useState } from 'react';
import { updateCart } from '../../redux/cart/cartSlice';
import { useEffect } from 'react';

const ProductInfo = ({ product }) => {

    const { currency } = useSelector(state => state.products)
    const { cart } = useSelector(state => state.cart)
    const [size, setSize] = useState(undefined)
    const [wishList, setWishList] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        console.log(cart)
    }, [cart])

    return (
        <div className={' h-full w-full mt-10 sm:mt-0   px-[60px] sm:px-8 space-y-4  montserrat flex flex-col justify-center '} >
            <p className=' font-[500] text-[18px] ' >{product.name} <span className='text-[12px] font-normal text-gray-500 ' > Reference : {product._id} </span> </p>
            <h5 className='font-[600] text-[18px] ' >{product.price} {currency} </h5>
            <p className='text-[15px] px-1 ' >{product.description}</p>
            <Select onChange={(evt) => setSize(evt)} placeholder="Size" allowClear className='!mt-[100px] sm:mx-10  bg-white text-gray-800 shadow-lg  ' name="size" id="size" >


                {product.sizes.map(el => (
                    <Select.Option key={el} value={el} className="text-gray-800 hover:bg-gray-200  ">
                        {el.toUpperCase()}
                    </Select.Option>
                ))}
            </Select>



            <div className='flex !mt-5 space-x-3 sm:mx-10 items-center' >
                <button onClick={() => dispatch(updateCart({ size, id: product._id }))} className='w-full bg-green-400 py-2 rounded-full  text-white font-[600] active:bg-green-500 ' >Add to cart</button>
                <button className={'border-[2px]  h-10 w-12 rounded-full flex justify-center items-center'} onClick={() => setWishList(!wishList)} ><Heart className={` transition-all duration-3000 ${wishList && 'fill-red-600 text-red-900'} `} /></button>
            </div>
        </div>
    )
}

export default ProductInfo