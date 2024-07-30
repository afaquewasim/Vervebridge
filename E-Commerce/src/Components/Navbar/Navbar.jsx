import React, { useState, useContext } from 'react';
import cartBtn from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../context/ShopContext';
import './Navbar.css'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { getTotalCartItem } = useContext(ShopContext);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='w-full h-fit z-10 bg-white'>
            <div className="flex justify-between items-center text-2xl p-2">
                <div className='mx-2 text-green-900'><Link to='/'>E-Commerce</Link></div>
                <div className='hidden md:flex'>
                    <li className='mx-4 cursor-pointer'><Link to='/'>Home</Link></li>
                    <li className='mx-4 cursor-pointer'><Link to='/men'>Men</Link></li>
                    <li className='mx-4 cursor-pointer'><Link to='/women'>Women</Link></li>
                    <li className='mx-4 cursor-pointer'><Link to='/kids'>Kids</Link></li>
                </div>
                <div className='flex items-center'>
                    <Link to='/loginsignup'><button className='mx-4 px-4 py-2 border-[1px] rounded-xl text-xl'>Login</button></Link>
                    <div className='relative'>
                        <Link to='/cart'>
                            <button className='mx-4 p-2 border-2 rounded-full flex items-center justify-center relative border-none'>
                                <img className='w-10 h-10' src={cartBtn} alt="Cart" />
                            </button>
                            <span className='absolute top-0 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-lg'>
                                {getTotalCartItem()}
                            </span>
                        </Link>
                    </div>
                </div>
                <button className='block md:hidden' onClick={toggleMenu}>
                    <svg className='w-8 h-8' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M4 6h16M4 12h16m-7 6h7'></path>
                    </svg>
                </button>
            </div>
            <div className={`md:hidden overflow-hidden transition-slow ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <ul className='flex flex-col items-center'>
                    <li className='my-2'><Link to='/'>Home</Link></li>
                    <li className='my-2'><Link to='/men'>Men</Link></li>
                    <li className='my-2'><Link to='/women'>Women</Link></li>
                    <li className='my-2'><Link to='/kids'>Kids</Link></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
