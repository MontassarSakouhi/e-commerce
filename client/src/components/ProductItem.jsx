


import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductItem = ({ _id, name, price, image }) => {
    const { currency } = useSelector((state) => state.products)
    return (
        <div className='flex flex-col gap-2 bg-gray-100 rounded'>
            <Link to={`/products/${_id}`} >
                <img className='rounded transition hover:scale-[1.02] ease-in-out' src={image[0]} alt="" /></Link>
            <p className=' ml-1 text-xs md:text-md text-gray-700' > {name} </p>
            <p className=' ml-1' > {price} {currency}  </p>
        </div>
    )
}


export default ProductItem