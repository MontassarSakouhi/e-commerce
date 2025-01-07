

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'


const ProductItem = ({ _id, name, price, image }) => {
    const { currency } = useSelector((state) => state.products)
    const navigate = useNavigate()
    return (
        <div className='flex flex-col gap-2 w-[200px] hover:scale-[1.03] rounded-md shadow-xl'>

            <img className='rounded-t transition ease-in-out object-cover  ' src={image[0]} alt="" />

            <div className='bg-white pb-3 pt-1 rounded-b '>
                <p className='text-xs md:text-md text-gray-700 font-semibold  text-center'>{name}</p>
                <div className='flex justify-between mx-2 items-center mt-3'>
                    <p className='text-center'>{price} {currency}</p>
                    <button onClick={() => navigate(`/products/${_id}`)} className='bg-slate-100 font-semibold text-gray-800 py-1 px-2 rounded-lg hover:bg-slate-400 transition duration-300 ease-in-out'>

                    <FontAwesomeIcon icon={faSearch} className="text-black" />
                    </button>
                </div>
            </div>
        </div>
    )
}


export default ProductItem