// Byimaan
'use client'
import React from 'react';

import SomethingWentWrong from '@/components/data-not-found';

import { ShoppingCart } from 'lucide-react';

import CartProductItem from './cart-product-item';
import OrderView from './view-order-ui';

import { useCart } from '@/components/providers/cart-provider';


function CartPage() {

    const cart = useCart();

    const cartItems = cart?.getItems();

    if (!cart || !cartItems || cartItems.length === 0){
        return <CartIsEmpty />
    }; 
    return (
        <div className="w-full lg:flex my-4 lg:justify-around space-y-2 lg: ">
            
            <section className='cart-tems w-full lg:w-[48%] space-y-2'>
                {
                    cartItems.map(
                        (item, i) => <CartProductItem key={i} data={item}/>
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