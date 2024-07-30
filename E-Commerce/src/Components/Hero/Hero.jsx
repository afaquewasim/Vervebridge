import React from 'react'
import handIcon from '../Assets/hand_icon.png'
import sideImg from '../Assets/hero_image.png'

const Hero = () => {
    return (
        <div className='h-[calc(100vh-70px)] flex flex-col lg:flex-row lg:justify-around bg-gradient-to-t-custom from-custom-purple to-custom-pink'>
            <div className="flex-1 flex flex-col justify-center gap-5 pl-44 leading-tight">
                <div className="collection text-4xl lg:text-7xl lg:leading-normal">
                    <h1 className='text-3xl text-green-900'>New Arrival</h1>
                    <div className="hand flex gap-2 items-center">
                        <p>New</p>
                        <img className='w-12 h-12 lg:w-20 lg:h-20' src={handIcon} alt="" />
                    </div>
                    <p>Collection</p>
                    <p>For Everyone</p>
                </div>
                <button className='px-4 py-2 border-[1px] rounded-full w-fit text-xl'>Explore</button>
            </div>
            <div className="right my-4">
                <img
                    src={sideImg}
                    alt="side img"
                    className='w-[65%]'
                />
            </div>
        </div>
    )
}

export default Hero