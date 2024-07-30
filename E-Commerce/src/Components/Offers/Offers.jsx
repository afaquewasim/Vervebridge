import React from 'react';
import exceImg from '../Assets/exclusive_image.png';

const Offers = () => {
    return (
        <div className='w-full max-w-6xl h-auto mx-auto py-4 px-4 md:px-8 bg-gradient-to-t-custom from-custom-purple to-custom-pink rounded-lg flex flex-col md:flex-row items-center'>
            <div className="left flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left mb-4 md:mb-0">
                <h1 className='text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight'>
                    Exclusive Offers for You
                </h1>
                <p className='uppercase text-lg md:text-xl mt-2'>
                    Only on best sellers products
                </p>
                <button className='mt-4 px-6 py-3 bg-[#ff4141] text-white text-lg md:text-xl font-medium rounded-full shadow-lg hover:bg-[#e03e3e]'>
                    Check Out
                </button>
            </div>
            <div className="right flex-1 flex items-center justify-center mt-4 md:mt-0">
                <img 
                    src={exceImg} 
                    alt="Exclusive Offers"
                    className='w-48 md:w-64 lg:w-80 xl:w-[16rem] h-auto'
                />
            </div>
        </div>
    );
}

export default Offers;
