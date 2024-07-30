import React from 'react'
import instaIcon from '../Assets/instagram_icon.png'
import printestIcon from '../Assets/pintester_icon.png'
import whatsappIcon from '../Assets/whatsapp_icon.png'

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <div className='flex flex-col justify-center items-center gap-12'>
            <div className="logo flex items-center gap-5">
                <h1 className='text-green-900 text-5xl font-semibold'>E-Commerce</h1>
            </div>
            <ul className='flex gap-12 text-[#252525] text-xl'>
                <li className='cursor-pointer'>Company</li>
                <li className='cursor-pointer'>Products</li>
                <li className='cursor-pointer'>Offices</li>
                <li className='cursor-pointer'>About</li>
                <li className='cursor-pointer'>Contact</li>
            </ul>
            <div className="socialIcon flex gap-5">
                <div className='p-3 pb-2 bg-[#cbcbcb] border border-1 border-[#797979] rounded-lg cursor-pointer'>
                    <img src={instaIcon} alt="" />
                </div>
                <div className='p-3 pb-2 bg-[#cbcbcb] border border-1 border-[#797979] rounded-lg cursor-pointer'>
                    <img src={printestIcon} alt="" />
                </div>
                <div className='p-3 pb-2 bg-[#cbcbcb] border border-1 border-[#797979] rounded-lg cursor-pointer'>
                    <img src={whatsappIcon} alt="" />
                </div>
            </div>
            <div className='flex flex-col items-center gap-2 w-full mb-7 text-[#1a1a1a] text-2xl'>
                <hr className='w-[80%] border-none rounded-xl h-1 bg-[#797979]'/>
                <p>Copyright &copy; {currentYear} - All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
