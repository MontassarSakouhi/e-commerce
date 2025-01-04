

import { Carousel } from 'antd';

import React from 'react'
import { assets } from '../assets/assets/assets'

function Hero() {
    return (
        <div className='border h-[600px]  sm:h-[400px] flex flex-col sm:flex-row  '>

            <div className=' w-full  font-bold md:w-1/2 h-full flex flex-col items-center justify-center'>
                <div className='flex items-center gap-3' >
                    <p className='w-[30px] sm:w-[50px] h-[2px] bg-black' ></p>
                    <p className=' text-1md lg:text-1xl' >OUR BEST SELLERS</p>
                </div>
                <h1 className='text-3xl lg:text-5xl m-2 playfair-display text-gray-700' >Latest Arrivals</h1>
                <div className='flex items-center mt-3 gap-3' >
                    <p> SHOP NOW</p>
                    <p className='w-[30px] sm:w-[50px]  h-[2px] bg-black' ></p>
                </div>
            </div>

            <div className=' w-full  font-bold md:w-1/2   '>
                <Carousel
                    effect="fade"
                    className=""
                >
                    <div>
                        <h3 ><img src={assets.hero_img} alt="" className='h-full' /></h3>
                    </div>
                    <div>
                        <h3 ><img src={assets.hero1_img} alt="" className='min-h-[400px]' /></h3>
                    </div>
                    <div>
                        <h3 ><img src={assets.hero2_img} alt="" className='min-h-[400px]' /></h3>
                    </div>
                    <div>
                        <h3 >4</h3>
                    </div>
                </Carousel>


            </div >
        </div>


    )
}


export default Hero