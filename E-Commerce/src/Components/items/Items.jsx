import React from 'react';
import { Link } from 'react-router-dom';

const Items = (props) => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling
        });
    };

    return (
        <div className='w-[225px] mx-4 hover:scale-105 transition-transform duration-300 '>
            <Link to={`/product/${props.id}`}>
                <img
                    onClick={scrollToTop}
                    className='cursor-pointer'
                    src={props.image}
                    alt={props.name}
                />
            </Link>
            <p className='cursor-pointer'>{props.name}</p>
            <div className='flex gap-[20px]'>
                <div className="new text-xl text-green-500">
                    <span className='text-black'>Price </span>$ {props.new_price}
                </div>
                <div className="old text-xl line-through text-red-600">
                    $ {props.old_price}
                </div>
            </div>
        </div>
    );
};

export default Items;
