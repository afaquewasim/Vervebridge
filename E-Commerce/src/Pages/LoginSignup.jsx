import React from 'react';

const LoginSignup = () => {
    return (
        <div className='w-full h-[calc(100vh-74px)] bg-[#fce3fe] flex items-center justify-center'>
            <div className="container w-[90%] max-w-[580px] h-auto bg-white px-6 py-8 md:px-10 md:py-12">
                <h1 className='mb-4 text-xl font-bold text-center md:text-2xl'>SignUp</h1>
                <div className='flex flex-col gap-4'>
                    <input className='h-14 w-full pl-4 border border-[#c9c9c9] text-[#5c5c5c] text-xl' type="text" placeholder='Name' />
                    <input className='h-14 w-full pl-4 border border-[#c9c9c9] text-[#5c5c5c] text-xl' type="text" placeholder='Username' />
                    <input className='h-14 w-full pl-4 border border-[#c9c9c9] text-[#5c5c5c] text-xl' type="email" placeholder='Email' />
                    <input className='h-14 w-full pl-4 border border-[#c9c9c9] text-[#5c5c5c] text-xl' type="password" placeholder='Password' />
                </div>
                <button className='w-full h-10 mt-6 bg-[#ff4141] text-white text-lg font-bold rounded-lg'>Continue</button>
                <p className='mt-4 text-center text-[#5c5c5c]'>Already have an account? <span className='text-blue-500 cursor-pointer'>Login here</span></p>
                <div className="agree flex items-center mt-4 gap-5 text-[#5c5c5c]">
                    <input className='mr-2' type="checkbox" name="" id="" />
                    <p className='text-[#5c5c5c]'>By continuing, I agree to all the terms and conditions</p>
                </div>
            </div>
        </div>
    );
}

export default LoginSignup;
