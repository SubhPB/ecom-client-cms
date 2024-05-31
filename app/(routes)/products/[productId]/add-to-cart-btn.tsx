// Byimaan

'use client';

import React from 'react';
import toast from 'react-hot-toast';

import Link from 'next/link';
import { useCart } from '@/components/providers/cart-provider';

import { ShoppingCart } from 'lucide-react';
import { IdPropTS } from '@/types/components';

function AddToCartButton({id}: IdPropTS) {

    const cart = useCart();

    if (!cart){
        return (
            <div className="rounded-2xl w-[35px] h-[20px] bg-gray-100"></div>
        )
    };

    const isAlreadyInCart = cart.getItem(id);

    if (!isAlreadyInCart){
        const addToCart = async () => {
            await cart.addItem(id).then(
                res => toast.success("Item is added in your cart.")
            );
        }
        return (
            <button onClick={addToCart} className='text-white font-semibold rounded-2xl text-lg px-4 py-2 bg-black flex gap-2 items-center'>
                Add to cart {<ShoppingCart className=' h-6 w-6'/>}
            </button>
        )
    };

    return (
        <Link href={'/cart'} className='text-white font-semibold rounded-2xl text-lg px-4 py-2 bg-green-400 flex gap-2 items-center'>
            Go to cart {<ShoppingCart className=' h-6 w-6'/>}
        </Link>
    )

};

export default AddToCartButton