
import React from 'react'

const Title = ({ title1, title2 }) => {
    return (
        <div className='flex gap-2 items-center mb-6 ' >
            <p className='text-gray-600 text-2xl font-semibold ' > {title1} <span className='text-black' > {title2} </span> </p>
            <p className='w-8 h-[2px] bg-gray-600  '></p>
        </div>
    )
}

export default Title