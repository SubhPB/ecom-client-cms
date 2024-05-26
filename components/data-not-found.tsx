// Byimaan

import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { subtle } from 'crypto';

interface SomeThingWentWrongTS {
    className ?: string
    title ?: {
        className ?: string,
        text ?: string
    }
    subTitle ?: {
        className ?: string,
        text ?: string
    }
    icon ?: React.ReactElement
}

function SomethingWentWrong(
    {
        className="no-data absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center font-bold",
        title={},
        subTitle={},
        icon=<AlertTriangle className='h-8 w-8'/>
    }: SomeThingWentWrongTS)
    {
        title.className = title?.className ?? 'text-3xl text-red-400 flex flex-col md:flex-row  items-center gap-2 mb-2';
        title.text = title?.text ?? 'Something went wrong!';

        subTitle.className = subTitle?.className ?? 'text-2xl text-zinc-600';
        subTitle.text = subTitle?.text ?? ''

        return (
            <div className={className}>
                <h1 className={title.className}> {icon} {title.text}</h1>
                <h4 className={subTitle.className}>{subTitle.text}</h4>
            </div>
        )
};

export default SomethingWentWrong