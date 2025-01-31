import p_img1 from './blazer1.png'
import p_img2 from './blazer2.png'
import p_img3 from './blazer3.png'
import p_img4 from './blazer4.png'
import p_img5 from './blazer5.png'

import logo from './logo.png'
import cart_icon from './cart_icon.png'
import bin_icon from './bin_icon.png'
import dropdown_icon from './dropdown_icon.png'
import exchange_icon from './exchange_icon.png'
import profile_icon from './profile_icon.png'
import quality_icon from './quality_icon.png'
import search_icon from './search_icon.png'
import star_dull_icon from './star_dull_icon.png'
import star_icon from './star_icon.png'
import support_img from './support_img.png'
import menu_icon from './menu_icon.png'
import razorpay_logo from './razorpay_logo.png'
import cross_icon from './cross_icon.png'
import hero_img from './hero.png'
import hero1_img from './hero1.png'
import hero2_img from './hero2.png'
import contactUs_img from './contactUs.png'
// import hero3_img from './hero3.png'


export const assets = {
    logo,
    hero_img,
    hero1_img,
    hero2_img,
    cart_icon,
    dropdown_icon,
    exchange_icon,
    profile_icon,
    quality_icon,
    search_icon,
    star_dull_icon,
    star_icon,
    bin_icon,
    support_img,
    menu_icon,
    razorpay_logo,
    cross_icon,
    contactUs_img
}

export const products = [
    {
        _id: "aaaaa",
        name: "Blazer basique",
        description: "Blazer basique à col à rabat, manches longues et fermeture par un bouton. Disponible en plusieurs couleurs.",
        price: 159,
        image: [p_img1, p_img2, p_img3, p_img4, p_img5],
        category: "women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaac",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 50,
        image: [p_img2, p_img1, p_img3, p_img4, p_img5],
        category: "men",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 100,
        image: [p_img3, p_img2, p_img3, p_img4, p_img5],
        category: "kids",
        subCategory: "sweaters",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaaai",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with a round neckline and short sleeves, worn as an undershirt or outer garment.",
        price: 30,
        image: [p_img4, p_img2, p_img3, p_img4, p_img5],
        category: "men",
        subCategory: "sweaters",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
   

]