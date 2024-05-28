// Byimaan

'use client';

import { createContext, useContext, useState } from "react";

import { Dispatch, SetStateAction } from "react";

type ContextStateTS = {
    images: string[],
    currImgIndex: number | null,
    setCurrImgIndex: Dispatch<SetStateAction<number | null>>
} | null;

type GalleryProviderPropTS = {
    images: string[],
    children : React.ReactNode
};

const GalleryContext = createContext<ContextStateTS>(null);

export const GalleryProvider = ({images, children}:GalleryProviderPropTS) => {

    const defaultState: number | null = images.length > 0 ? 0 : null;
    const [currImgIndex, setCurrImgIndex] = useState(defaultState);
    console.log("Check what i got ", images)

    return (
        <GalleryContext.Provider value={{images, currImgIndex, setCurrImgIndex}}>
            {children}
        </GalleryContext.Provider>
    )
};

export const useGallery = () => useContext(GalleryContext);