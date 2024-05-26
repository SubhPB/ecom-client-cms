// Byimaan

import React from 'react';
import { ParentWithClassNamePropTS } from '@/types/components';


function Carousel(
    {
        children,
        className='w-full my-2 overflow-x-scroll hide-srollbar flex gap-1 flex-shrink-0 scroll-smooth'
    }: ParentWithClassNamePropTS) {
  return (
    <div className={`crousel ${className}`}>
        {children}
    </div>
  )
}

export default Carousel
