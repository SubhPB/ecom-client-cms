// Byimaan

import React from 'react';
import Image from 'next/image';

import { ProductTS } from '@/types/app';
import { DataPropTS } from '@/types/components';

import BgFallback from './bg-fallback';
import Link from 'next/link';

function ProductCard({data}: DataPropTS<ProductTS>) {

    const {id, name, price, colorId, images} = data;
    
    const haveImgs = Array.isArray(images) && images.length > 0

    return (
        <div className={`flex-shrink-0 w-[250px] rounded-lg p-2 bg-gray-200`}>
            {
                haveImgs ? <Image
                    height={500}
                    width={300}
                    quality={100}
                    alt='product-img'
                    objectFit='cover'
                    objectPosition='center'
                    src={images[0].url}
                    className='h-[250px] w-full rounded-lg my-2 object-center object-contain'
                /> : 
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