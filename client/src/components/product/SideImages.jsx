

import React from 'react'
import { useState } from 'react'

const SideImages = ({ product, swiper }) => {
    const [selectedImage, setSelectedImage] = useState('')

    const changeSlide = (index) => {
        if (swiper) {
            swiper.slideTo(index);
        }
    };
    return (

        <div className={' hidden   sm:flex flex-col  gap-2  w-[150px]   '} >
            {product.image.map((el, i) => (<div onClick={() => changeSlide(i)} key={i} className={'h-[130px] w-[80px]  '} > <img onClick={() => setSelectedImage(el)} className={`${selectedImage === el && 'border-[2px] border-black '} `} src={el} alt="" /> </div>))}
        </div>
    )
}

export default SideImages