import React from 'react';

const NewsLetter = () => {
    return (
        <div className='w-full max-w-4xl mx-auto my-10 py-4 bg-gradient-to-t-custom from-custom-purple to-custom-pink rounded-lg md:rounded-full flex flex-col items-center'>
            <h1 className='text-3xl md:text-5xl text-center my-4 md:my-6'>
                Get Exclusive Offers On Your Email
            </h1>
            <p className='text-lg md:text-xl text-center mb-4 md:mb-6'>
                Subscribe to our newsletter and stay updated
            </p>
            <div className="flex flex-col md:flex-row items-center justify-between bg-white rounded-lg md:rounded-full mx-auto px-4 py-2 md:px-6 md:py-3 text-base md:text-xl">
                <input
                    className="flex-grow border-none outline-none w-full md:w-56 text-black placeholder-gray-500 py-2 px-4"
                    type="email"
                    placeholder="Your Email ID"
                />
                <button className="mt-2 md:mt-0 md:ml-6 w-full md:w-36 px-4 md:px-6 bg-black text-white rounded-lg md:rounded-full py-2">
                    Subscribe
                </button>
            </div>
        </div>
    );
};

export default NewsLetter;
