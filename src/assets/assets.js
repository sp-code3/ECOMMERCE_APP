import hero_img from '../assets/Hero_img.jpg'
import support from '../assets/support.png'
import exchange from '../assets/exchange.png'
import return_policy from '../assets/return_policy.png'
import search from '../assets/search.png'
import cart_icon from '../assets/shopping-bag.png'
import profile from '../assets/user.png'
import menu from '../assets/menu.png'
import down from '../assets/down.png'
import close from '../assets/close.png'
import star from '../assets/star.png'
import product_img from '../assets/Product1.jpg'
import product_img2 from '../assets/Product2.jpg'
import product_img3 from '../assets/Product3.jpg'
import product_img4 from '../assets/Product4.jpg'
import product_img5 from '../assets/Product5.jpg'
import bin_icon from '../assets/recycle-bin.png'
import stripe from '../assets/stripe.webp'
import razorpay from '../assets/razorpay.png'
import about_img from '../assets/about_img.jpg'
import logo from '../assets/logo.jpg'

export const products = [
    {
        _id : "aaa",
        name: "T-shirt",
        description: "A lightweight, usually knitted",
        price: 100,
        image: [product_img2,product_img, product_img3,product_img4,product_img5],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S","M","L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id : "aab",
        name: "T-shirt",
        description: "A lightweight, usually knitted",
        price: 100,
        image: [product_img,product_img2,product_img3,product_img4,product_img5],
        category: "Kids",
        subCategory: "Bottomwear",
        sizes: ["S","M","L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id : "aac",
        name: "T-shirt",
        description: "A lightweight, usually knitted",
        price: 50,
        image: [product_img3,product_img, product_img2,product_img4, product_img5],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["S","M","L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id : "aad",
        name: "Pant",
        description: "A lightweight, usually knitted",
        price: 300,
        image: [product_img4,product_img,product_img2,product_img3,product_img5],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["S","M","L"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id : "aae",
        name: "Trouser",
        description: "A lightweight, usually knitted",
        price: 300,
        image: [product_img5,product_img,product_img2,product_img3,product_img4],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["S","M","L"],
        date: 1716634345448,
        bestseller: false
    }
]

export const assets = {
    hero_img,
    support,
    exchange,
    return_policy,
    search,
    cart_icon,
    profile,
    menu,
    down,
    close,
    star,
    product_img,
    product_img2,
    product_img3,
    product_img4,
    product_img5,
    bin_icon,
    stripe,
    razorpay,
    about_img,
    logo
}