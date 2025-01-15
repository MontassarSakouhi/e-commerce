import { assets } from "../assets/assets/assets";
import Title from "../components/title/Title";
import NewsLetter from "../components/NewsLetter/NewsLetter";

const About = () => {
    return (
        <div>
            <Title text1={'ABOUT'} text2={'US'} />
            <div className="flex flex-col md:flex-row items-center justify-center px-4 py-10">


                <img
                    src={assets.contactUs_img}
                    alt="Fashion items"
                    className="w-[350px] h-[350px]  "
                />
                <div className="md:w-1/2  mt-8 md:mt-0 md:pl-10">
                    <p className="text-gray-700 leading-relaxed mb-4">
                        MonStyle was born out of a passion for fashion and a desire to redefine how people shop for clothing online. Our journey began with a simple idea: to create a platform where customers can easily explore, discover, and purchase a wide range of stylish and high-quality apparel from the comfort of their homes.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                        Since our inception, we’ve worked diligently to curate a diverse selection of clothing and accessories that cater to every style and preference. From casual wear to formal attire, we offer an extensive collection sourced from trusted designers and brands.
                    </p>
                    <h3 className="text-2xl font-semibold mb-2">Our Mission</h3>
                    <p className="text-gray-700 leading-relaxed">
                        Our mission at MonStyle is to empower customers with confidence, convenience, and style. We are dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and selecting your perfect outfit to delivery and beyond.
                    </p>
                </div>
            </div>
        <NewsLetter />
        </div>
    );
};

export default About;
