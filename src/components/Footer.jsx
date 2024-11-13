import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        <div>
            <img src={assets.logo}  alt="SP" className='mb-5 w-32' />
            <p className='w-full md:w-2/3 text-gray-600'>
            Lorem ipsum is a placeholder text commonly used to demonstrate the visual 
            form of a document or a typeface without relying on meaningful content
            </p>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>

        <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+917092381153</li>
                <li>vpsuriya13@gmail.com</li>
            </ul>
        </div>
    </div>

    <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ sp.com - All Right Reserved.</p>
    </div>
    </div>
    
  )
}

export default Footer