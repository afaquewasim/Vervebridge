import React, { useContext } from 'react';
import { ShopContext } from '../../context/ShopContext';
import removeIcon from '../Assets/cart_cross_icon.png';
import './CartItem.css';

const CartItem = () => {
    const { allProducts, cartItems, removeFromCart, addToCart, getTotalAmount } = useContext(ShopContext);

    // Calculate the total quantity of items in the cart
    const totalQuantity = Object.values(cartItems).reduce((acc, quantity) => acc + quantity, 0);

    return (
        <div className='my-24 mx-40'>
            {totalQuantity === 0 ? (
                <div className="text-center">
                    <h2 className="text-2xl font-semibold">Please add items to cart</h2>
                </div>
            ) : (
                <>
                    <div className='main'>
                        <p className='text-center'>Products</p>
                        <p>Title</p>
                        <p className='text-center'>Price</p>
                        <p className='text-center'>Quantity</p>
                        <p className='text-center'>Total</p>
                        <p className='text-center'>Remove</p>
                        <p className='text-center'>Add</p>
                    </div>

                    {allProducts.map((e) => {
                        if (cartItems[e.id] > 0) {
                            return (
                                <div key={e.id}>
                                    <div className='main'>
                                        <img src={e.image} alt="" />
                                        <p>{e.name}</p>
                                        <p>$ {e.new_price}</p>
                                        <p>{cartItems[e.id]}</p>
                                        <p>$ {e.new_price * cartItems[e.id]}</p>
                                        <img
                                            className='w-fit mx-auto p-2] shadow-2xl rounded-full cursor-pointer'
                                            src={removeIcon}
                                            onClick={() => { removeFromCart(e.id) }}
                                            alt=""
                                        />
                                        <p
                                            onClick={() => { addToCart(e.id) }}
                                            className='w-fit mx-auto p-2]  rounded-full cursor-pointer text-3xl font-semibold'
                                        >
                                            +
                                        </p>
                                    </div>
                                </div>
                            );
                        }
                        return null;
                    })}
                    <div className='flex my-24'>
                        <div className='flex flex-1 flex-col mr-52'>
                            <div className='w-fit mx-auto'>
                                <h1 className='text-4xl mb-2'>Cart Total</h1>
                                <hr className='w-[75px] mb-4 h-[6px] border-0 rounded-lg mx-auto bg-black' />
                            </div>
                            <div>
                                <div className='flex justify-between py-4 text-2xl'>
                                    <p>SubTotal</p>
                                    <p>$ {getTotalAmount()}</p>
                                </div>
                                <hr className='bg-black w-full h-1 rounded-lg' />
                                <div className='flex justify-between py-4 text-2xl'>
                                    <p>Shipping</p>
                                    <p>Free</p>
                                </div>
                                <hr className='bg-black w-full h-1 rounded-lg' />
                                <div className='flex justify-between py-4 text-2xl font-semibold'>
                                    <h3>Total</h3>
                                    <h3>$ {getTotalAmount()}</h3>
                                </div>
                            </div>
                            <button className='w-64 h-12 outline-none border-none bg-[#fefefe] text-black text-lg font-semibold uppercase rounded-lg'>Proceed to Checkout</button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default CartItem;
