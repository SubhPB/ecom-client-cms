// Byimaan

import React from 'react';
import { ClassNameOptPropTS } from '@/types/components';
import { Image as LucideImg } from 'lucide-react';

type BgFallbackTS = ClassNameOptPropTS & {
    bgColor ?: string,
    icon ?: React.ReactElement | null
}

function BgFallback({
    className='w-full h-full rounded-lg flex justify-center items-center text-white',
    bgColor='bg-gray-200',
    icon=<LucideImg className='h-8 w-8 text-white'/>
    }: BgFallbackTS) {
    return (
        <div className={`bg-fallback ${className} ${bgColor}`}>
            {icon ?? <></>}
        </div>
    )
}

export default BgFallback