import React from 'react';

const Title = ({ text1, text2 }) => {
    return (
        <div className="flex gap-2 items-center justify-center text my-14">
            <p className="text-gray-600 text-2xl font-semibold">
                {text1} <span className="text-black">{text2}</span>
            </p>
            <div className="relative w-8 h-5 rounded-full border-2 border-transparent bg-gradient-to-r from-gray-700 to-gray-500 p-[2px]">
                <div className="w-full h-full bg-white rounded-full"></div>
                <div className="absolute w-[2px] h-[200%] bg-white transform rotate-45 left-1/2 -translate-x-1/2"></div>
            </div>
        </div>
    );
};

export default Title;
