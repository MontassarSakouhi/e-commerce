import React from 'react'

const Title = ({ text1, text2 }) => {
    return (
        <div className='flex gap-2 items-center justify-center text  my-14 ' >
            <p className='text-gray-600 text-2xl font-semibold ' > {text1} <span className='text-black' > {text2} </span> </p>
            <p className='w-8 h-[2px] bg-gray-600  '></p>
        </div>
    )
}

export default Title