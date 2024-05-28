// Byimaan

import { getProduct } from '@/actions/GET/products'
import BgFallback from '@/components/bg-fallback';
import React from 'react'

type CartProductTS = {
    id: string,
    count: number
}

// Will restart from here 17:31 (27-05-2024)

async function CartProductItem({id, count}: CartProductTS) {

    // const product = getProduct(id);

    return (
        <div className="cart-item w-full bg-gray-400 flex gap-2 p-4">
            <div className="img h-[250px] w-[230px]">
                <BgFallback />
            </div>
            <div className="text-area flex-grow text-black text-semibold text-sm">
                <p className='line-clamp-2 text-ellipsis text-xl'>Cart Item</p>
                <p className='text-gray-400 text-lg'>Price : <span className='text-black'>{`$ ${12}`}</span></p>
                <p className='text-gray-400'>Selected : <span className='text-black'>{`$ ${count}`}</span></p>
                <p className='text-gray-400'>Total Price : <span className='text-black'>{`$ ${12*count}`}</span></p>
            </div>
        </div>
    )
}

export default CartProductItem