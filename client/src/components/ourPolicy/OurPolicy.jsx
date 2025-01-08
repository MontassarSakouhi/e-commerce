import { assets } from "../../assets/assets/assets";

const OurPolicy = () => {
    return (
        <div className="flex justify-around py-[80px]">
            <div className="flex flex-col items-center">
                <img src={assets.support_img} className="w-12 sm:w-13 sm:mb-6" alt="" />
                <p className="roboto-condensed text-[15px] text-center sm:text-[20px]">Round-the-Clock Assistance</p>
                <p className="text-center px-1 lg:px-10 text-gray-600 text-[10px] sm:text-[15px]">Our team is available 24/7 to assist with any queries you may have.</p>
            </div>
            <div className="flex flex-col items-center">
                <img src={assets.exchange_icon} className="w-12 sm:w-14 sm:mb-5" alt="" />
                <p className="roboto-condensed pb-5 sm:pb-0 text-[15px] text-center sm:text-[20px]">Hassle-Free Returns</p>
                <p className="text-center px-1 lg:px-10 text-gray-600 text-[10px] sm:text-[15px]">Enjoy a seamless return process within 3 days for peace of mind.</p>
            </div>
            <div className="flex flex-col items-center">
                <img src={assets.quality_icon} className="w-12  sm:w-14 sm:mb-5" alt="" />
                <p className="roboto-condensed text-[15px] text-center sm:text-[20px]">Simple & Fast Exchanges</p>
                <p className="text-center px-1 lg:px-10 text-gray-600 text-[10px] sm:text-[15px]">Exchanging products has never been easier or faster than with us.</p>
            </div>
        </div>
    );
}

export default OurPolicy;
