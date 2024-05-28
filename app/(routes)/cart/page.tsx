// Byimaan
'use client'
import React from 'react';

import { useCart } from '@/components/providers/shopping-cart';
import SomethingWentWrong from '@/components/data-not-found';

import { ShoppingCart } from 'lucide-react';

function CartPage() {

    const cart = useCart();

    const allItems = cart?.getAllCartItems() ?? [];

    if (!cart || (allItems.length === 0)){
        return <CartIsEmpty />
    };

    return (
        <div className="w-full md:flex my-4 bg-gray-200">

        </div>
    )
};

function CartIsEmpty(){
    return (
        <SomethingWentWrong
            title={
                {
                    text: 'Your Shopping cart is empty.'
                }
            }
            subTitle={
                {
                    text: "Hurry up! don't miss the sales."
                }
            }
            icon={<ShoppingCart className='h-10 w-10 text-red-400'/>}
        />
    )
}

export default CartPage