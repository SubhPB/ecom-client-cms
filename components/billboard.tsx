// Byimaan

import React from 'react';
import Image from 'next/image';

import { DataPropTS } from '@/types/components';
import { getBillboard, getBillboards } from '@/actions/GET/billboard';

async function Billboard({data: billlboardId}: DataPropTS<string | null>) {

    let billboard = billlboardId ? await getBillboard(billlboardId) : await getBillboards();
    billboard = Array.isArray(billboard) ? billboard[0] : billboard;

    if (!billboard) return (
        <div className="billboard w-full rounded-lg my-2 h-[45dvh] relative bg-gray-200 grid place-content-center"> 
        </div>
    );
    const {imageUrl, label} = billboard;

    return (
        <div className="billboard w-full rounded-lg my-2 h-[45dvh] relative grid place-content-center">
            <Image 
                src={imageUrl}
                className={'h-full w-full absolute z-10 top-0 left-0 object-center object-contain'}
                alt="billboard-img"
                width={500}
                height={300}
                quality={100}
                layout="fixed"
            />
            <h2 className='hide-text text-center realtive z-20 text-5xl font-bold text-black px-[10%] opacity-[.75]'>
                {label ?? ''}
            </h2>
        </div>
    )
}

export default Billboard