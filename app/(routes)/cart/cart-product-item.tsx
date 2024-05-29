// Byimaan
import React from 'react'

import { getProduct } from '@/actions/GET/products';

import BgFallback from '@/components/bg-fallback';
import { CancelItem } from './cart-features';
import { ItemCounter } from './cart-features';
// import Image from 'next/image';
import { MultiImageHolder } from '@/components/gallery';

export type CartProductTS = {
    id: string,
    count: number
};

async function CartProductItem({id, count}: CartProductTS) {

    const product = await getProduct(id);

    if (!product) {
        return <CartItemSkeleton />
    }

    const {images, name, price, } = product;
    return (
        <div className="cart-item w-full flex gap-2 p-4">
            <div className="img h-[140px] w-[130px] md:h-[190px] md:w-[180px] flex-shrink-0">
                <MultiImageHolder images={images.map( i => i.url )}/>
            </div>
            <div className="text-area flex-grow text-black text-bold text-sm relative">
                <CancelItem id={id}/>
                <p className='line-clamp-2 text-ellipsis text-xl pr-6'>{name}</p>
                <p className='text-gray-400'>Price : <span className='text-black'>{`$ ${price}`}</span></p>
                <p className='text-gray-400'>Selected : <span className='text-black'>{`${count} items`}</span></p>
                <p className='text-gray-400'>Total Price : <span className='text-black'>{`$ ${Number(price)*count}`}</span></p>
                <ItemCounter id={id} count={count}/>
            </div>
        </div>
    )
};

const CartItemSkeleton = () => {

    const TextSkeleton = ({w='w-[60%]', h='h-5'}) => <p className={` rounded-lg bg-gray-200 ${w} ${h}`}></p>
    return (
        <div className="cart-item w-full flex gap-2 p-4">
            <div className="img h-[140px] w-[130px] md:h-[190px] md:w-[180px] flex-shrink-0">
                <BgFallback />
            </div>
            <div className="text-area flex-grow space-y-2">
                <TextSkeleton />
                <TextSkeleton w='w-[50%]' />
                <TextSkeleton w='w-[40%]'/>

            </div>
    </div>
    )
};

export const CartItemWrap = (prop: CartProductTS) => {
    return <CartProductItem {...prop}/>
}


export default CartProductItem