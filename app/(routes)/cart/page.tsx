// Byimaan
'use client'
import React from 'react';

import { useCart } from '@/components/providers/shopping-cart';
import SomethingWentWrong from '@/components/data-not-found';

import { ShoppingCart } from 'lucide-react';

import {CartItemWrap} from './cart-product-item';
import OrderView from './view-order-ui';


function CartPage() {

    const cart = useCart();

    const allItems = cart?.getAllCartItems() ?? [];

    if (!cart || allItems.length === 0){
        return <CartIsEmpty />
    }
   

    return (
        <div className="w-full lg:flex my-4 lg:justify-around">
            <section className='cart-tems w-full lg:w-[48%] space-y-2'>
                {
                    allItems.map(
                        (v, i) => <CartItemWrap key={i} id={v.id} count={v.count}/>
                    )
                }
            </section>

            <section className='order-view w-full lg:w-[48%]'>
                <OrderView />
            </section>
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