import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import dropDownIcon from '../Components/Assets/dropdown_icon.png';
import Items from '../Components/items/Items';

const ShopCategory = (props) => {
    const { allProducts } = useContext(ShopContext);
    const [sortOrder, setSortOrder] = useState('default');
    const [isSortOptionsVisible, setIsSortOptionsVisible] = useState(false);

    const handleSort = (order) => {
        setSortOrder(order);
        setIsSortOptionsVisible(false); // Close the options after selecting
    };

    const getSortedProducts = () => {
        let sortedProducts = [...allProducts];
        if (sortOrder === 'asc') {
            sortedProducts.sort((a, b) => a.new_price - b.new_price);
        } else if (sortOrder === 'desc') {
            sortedProducts.sort((a, b) => b.new_price - a.new_price);
        }
        return sortedProducts;
    };

    const sortedProducts = getSortedProducts();

    return (
        <div>
            <img className='my-1 mx-auto block w-[82%]' src={props.banner} alt="" />
            <div className='w-[82%] mx-auto flex my-2 justify-between items-center'>
                <p>
                    <span className='font-semibold'> Showing 1-12</span> out of 36 products
                </p>
                <div className="sort py-2.5 px-4 cursor-pointer border border-1 border-[#888] flex rounded-full relative"
                    onClick={() => setIsSortOptionsVisible(!isSortOptionsVisible)}>
                    Sort by 
                    <img className='mx-2 color-white h-fit my-auto' src={dropDownIcon} alt="" />
                    {isSortOptionsVisible && (
                        <div className="sort-options absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-lg z-10">
                            <p className='cursor-pointer py-2 px-4 hover:bg-gray-200' onClick={() => handleSort('default')}>Default</p>
                            <p className='cursor-pointer py-2 px-4 hover:bg-gray-200' onClick={() => handleSort('asc')}>Price: Low to High</p>
                            <p className='cursor-pointer py-2 px-4 hover:bg-gray-200' onClick={() => handleSort('desc')}>Price: High to Low</p>
                        </div>
                    )}
                </div>
            </div>
            <div className='w-[82%] mx-auto my-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-2 gap-y-4 items-center justify-items-center'>
                {sortedProducts.map((item, i) => {
                    if (props.category === item.category) {
                        return (
                            <Items
                                key={i}
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                new_price={item.new_price}
                                old_price={item.old_price}
                            />
                        );
                    }
                    return null;
                })}
            </div>
            {/* <div className='capitalize flex justify-center items-center my-32 mx-auto w-40 h-10 bg-[#ededed] text-[#787878] rounded-full cursor-pointer'>
                Explore more
            </div> */}
        </div>
    );
}

export default ShopCategory;
