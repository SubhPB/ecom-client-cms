'use client';

import { useEffect, useState } from "react";
import { ParentPropTS } from "@/types/components";


export const FixHydration = ({children}: ParentPropTS) => {
    
    const [serverRendering, setServerRendering] = useState(true);

    useEffect(
        () => {
            setServerRendering(false)
        }, []
    );

    if (serverRendering){
        return <></>
    };

    return (
        <>
            {children}
        </>
    )
}