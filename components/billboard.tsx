// Byimaan

import React from 'react';
import Image from 'next/image';

import { Image as LucideImg } from 'lucide-react';

import { BillboardTS } from '@/types/app';

import { getBillboard, getBillboards } from '@/actions/GET/billboard';

type BillboardCompTS = {
    billboard: BillboardTS | null,
    allowFetchIfNoInput ?: boolean,
}


async function Billboard({billboard, allowFetchIfNoInput=false} : BillboardCompTS) {

    if (!billboard && allowFetchIfNoInput){
        const billboards = await getBillboards();
        billboard = (billboards && billboards.length > 0) ? billboards[0] : null;
    }

    if (!billboard) return (
        <div className="billboard w-full rounded-lg my-2 h-[45dvh] relative bg-gray-200 grid place-content-center"> 
            <LucideImg className='h-10 w-10 text-white'/>
        </div>
    );
    const {imageUrl, label} = billboard;

    return (
        <div className="billboard w-full rounded-lg my-2 h-[45dvh] relative grid place-content-center">
            <Image 
                src={imageUrl}
                className={'h-full w-full absolute z-10 top-0 left-0 object-center object-contain'}
                alt="billboard-img"
                blurDataURL={imageUrl}
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