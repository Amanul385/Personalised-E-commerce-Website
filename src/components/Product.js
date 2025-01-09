import React from 'react'
import { useDispatch, useSelector,  } from 'react-redux';
import { toast } from 'react-hot-toast'
import { add, remove } from '../redux/slices/CartSlice';
import Rating from './Rating';
import { useState } from 'react';

const Product = ({post}) => {

    const {cart}=useSelector((state) => state);
    const dispatch=useDispatch();
  
    const addToCart = ()=>{
        dispatch(add(post));
        toast.success('Successfully item add to cart')
    }

    const removeFromCart = ()=> {
        dispatch(remove(post.id));
        toast.error("Sucessfully item removed to cart");

    }


  return (
    <div className="flex flex-col items-center justify-between 
    hover:scale-105 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline">

    <div>
        <p className="text-gray-700 font-bold text-lg text-left truncate w-40 mt-1">{post.title}</p>
    </div>

    <div>
        <p className="w-40 text-gray-500  text-[10px] text-left font-semibold">{post.description}</p>
    </div>

    <div className="h-[180px]">
        <img src={post.image} className="h-full w-full " />
    </div>

    <div>
      <Rating initialRating={post.rating.rate} maxRating={5} />
    </div>

    {/* <div>
        <p>{post.rating.count}</p>
    </div> */}
     

    <div className="flex justify-between gap-12 items-center w-full mt-5">
    <div>
        <p className="text-green-600 font-semibold">${post.price}</p>
    </div>

    {
        cart.some((p) => p.id == post.id) ?
        (
            <button 
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
            onClick={removeFromCart} >
                Remove Item
            </button>
        ):
        (
            <button

            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
          text-[12px] p-1 px-3 uppercase 
          hover:bg-gray-700
          hover:text-white transition duration-300 ease-in"
            onClick={addToCart} >
                Add to Cart
            </button>
        )
    }
    </div>
    
    
    </div>
  )
}

export default Product
