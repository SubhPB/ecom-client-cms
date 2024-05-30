// Byimaan

import React from 'react';

import { ProductTS } from '@/types/app';
import { DataPropTS } from '@/types/components';

import BgFallback from './bg-fallback';
import Link from 'next/link';
import { MultiImageHolder } from './gallery';

import AddToCardComp from '@/app/(routes)/cart/add-to-card';
import { ShoppingCart } from 'lucide-react';

function ProductCard({data}: DataPropTS<ProductTS>) {

    const {id, name, price, colorId, images} = data;
    
    const haveImgs = Array.isArray(images) && images.length > 0

    return (
        <div className={`flex-shrink-0 w-[250px] rounded-lg p-2 bg-gray-100`}>
            {
                haveImgs ?

                <div className="h-[250px] w-full rounded-lg my-2 relative">
                    <MultiImageHolder images={images.map(i=> i.url)}/>

                    <AddToCardComp  
                        data={id}
                        className='absolute bottom-2 left-1/2 z-50 transform -translate-x-1/2 cursor-pointer p-2 bg-zinc-300 rounded-full text-black text-semibold'
                    >
                        <ShoppingCart className='h-4 w-4'/>
                    </AddToCardComp>
                </div>
                : 
                <BgFallback className='h-[32vh] w-full rounded-lg my-2'/>
            }

            <Link href={`/products/${id}`} className='font-bold text-xl text-zinc-600 line-clamp-2 text-ellipsis'>{name}</Link>
            <ul className='font-semibold text-zinc-500 text-base'>
                <li>{`$ ${price}`}</li>
            </ul>
        </div>
    )
}

export default ProductCard