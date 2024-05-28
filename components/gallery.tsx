// Byimaan
'use client';

import React from 'react';
import Image from 'next/image';

import { ClassNamePropTS } from '@/types/components';

import { useGallery } from './providers/gallery-provider';

import BgFallback from './bg-fallback';
import Carousel from './carousel';

// Wil start from here and fix large screen css later...


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
    console.log("Check what is lg image ", gallery)
    
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
}

export default Gallery
