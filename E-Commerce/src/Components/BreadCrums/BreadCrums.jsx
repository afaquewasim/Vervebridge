import React from 'react';
import arrowIcon from '../Assets/breadcrum_arrow.png';

const BreadCrumbs = (props) => {
    const { product } = props;
    return (
        <div className='flex items-center gap-2 my-4 mx-4 md:my-8 md:mx-32 text-sm md:text-base'>
            <span>Home</span> 
            <img className='w-4 h-4' src={arrowIcon} alt="Arrow" /> 
            <span>Shop</span> 
            <img className='w-4 h-4' src={arrowIcon} alt="Arrow" /> 
            <span>{product.category}</span> 
            <img className='w-4 h-4' src={arrowIcon} alt="Arrow" /> 
            <span>{product.name}</span>
        </div>
    );
}

export default BreadCrumbs;
