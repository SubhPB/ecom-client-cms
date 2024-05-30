// Byimaan
'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { ClassNamePropTS } from '@/types/components';

import { useGallery } from './providers/gallery-provider';

import BgFallback from './bg-fallback';
import Carousel from './carousel';


// will continue to work on MultiImageHolder

function Gallery({className}: ClassNamePropTS) {

    return (
        <div className={`gallery ${className}`}>
            <LargeImage />
            <SmallImages />
        </div>
    )
};

function LargeImage(){
    
    const gallery = useGallery();
    
    if (!gallery || gallery?.currImgIndex === null || gallery.images.length === 0) return (
        <div className="w-full md:w-[85%] h-[400px]">
            <BgFallback />
        </div>
    );
    
    const {images, currImgIndex } = gallery;

    return (
        <Image 
            src={images[currImgIndex]}
            alt='product-lg-img'
            quality={100}
            height={600}
            width={350}
            className="gallery-lg-img w-full md:w-[80%] h-[310px] md:h-[400px] object-contain object-center bg-gray-200"
        />
    )
};

function SmallImages(){

    const gallery = useGallery();

    if (!gallery || (gallery.currImgIndex === null ) || (gallery.images.length === 0)){
        return (
            <div className="w-[90px] h-[95px]">
                <BgFallback />
            </div>
        )
    };

    const handleClick = (_id:number) => _id !== gallery.currImgIndex && gallery.setCurrImgIndex(_id)

    return (
        <Carousel>
            {
                gallery.images.map(
                    (img, id) => {
                        
                        const isActive = id === gallery.currImgIndex;
                        
                        return <Image 
                            key={id}
                            src={img}
                            alt='product-sm-img'
                            quality={100}
                            height={500}
                            width={300}
                            className={`x-crousel-item gallery-sm-img flex-shrink-0 w-[90px] h-[95px] object-cover object-center rounded-lg p-1 ${isActive && "border-[2px] border-black" }`}
                            onClick={() => handleClick(id)}
                        />
                    }
                )
            }
        </Carousel>
    )
};

type MultiImageHolderTS = {
    h ?: string,
    w?: string,
    images ?: string[]
}

export function MultiImageHolder({h='h-full', w='w-full', images=[]}: MultiImageHolderTS){

    const [currImage, setCurrImgIndex] = useState(0);

    const moveAble = images.length > 0

    const goBack = () => {
        if ( moveAble && currImage > 0 ) setCurrImgIndex(i => i - 1);
    };


    const goNext = () => {
        if (moveAble && currImage < images.length - 1) setCurrImgIndex(i => i + 1);
    };

    return (
        <div className={`multi-img relative flex ${h} ${w} bg-gray-200 rounded-xl`}>
            <div onClick={goBack} className="left-div bg-transparent absolute z-20 w-1/2 top-0 left-0 h-full"></div>
                { 
                !moveAble ? <BgFallback />
                : <Image 
                    src={images[currImage]}
                    alt='mul-img-holder'
                    height={500}
                    width={300}
                    quality={100}
                    objectFit='contain'
                    objectPosition='center'
                    className={'h-full w-full object-center object-contain'}
                />
                }
            <div onClick={goNext} className="right-div bg-transparent absolute z-20 w-1/2 top-0 right-0 h-full"></div>
        </div>
    )
}

export default Gallery
