// Byimaan
'use client';

import React from 'react';
import Image from 'next/image';
import { DataPropTS } from '@/types/components';
import BgFallback from './bg-fallback';
import Carousel from './carousel';

// Wil start from here and fix large screen css later...

type GalleryTS = DataPropTS<string[]> & {
    className: string,
}

function Gallery({className, data}: GalleryTS) {

    return (
        <div className={`gallery ${className}`}>
            <LargeImage data={data[0] ?? null} />
            <SmallImages data={data ?? null} />
        </div>
    )
};

function LargeImage({data: imgSrc}: DataPropTS<string | null>){
    
    if (!imgSrc) return (
        <div className="w-full md:w-[85%] h-[400px]">
            <BgFallback />
        </div>
    )

    return (
        <Image 
            src={imgSrc}
            alt='product-lg-img'
            quality={100}
            height={500}
            width={300}
            className="gallery-lg-img w-full md:w-[85%] h-[400px] object-contain md:object-fill object-center rounded-lg"
        />
    )
};

function SmallImages({data: images}: DataPropTS<string[] | null>){
    if (!images || (Array.isArray(images) && images.length === 0)){
        return (
            <div className="w-[90px] h-[95px]">
                <BgFallback />
            </div>
        )
    };

    return (
        <Carousel>
            {
                images.map(
                    (img, id) => (
                        <Image 
                            key={id}
                            src={img}
                            alt='product-sm-img'
                            quality={100}
                            height={500}
                            width={300}
                            className="gallery-sm-img flex-shrink-0 w-[90px] h-[95px] object-cover object-center rounded-lg"
                        />
                    )
                )
            }
        </Carousel>
    )
}

export default Gallery
