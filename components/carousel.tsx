// Byimaan

import React from 'react';
import { ParentWithClassNamePropTS } from '@/types/components';


function Carousel(
    {
        children,
        className='x-crousel w-full my-2 overflow-x-scroll hide-srollbar flex gap-2 flex-shrink-0 scroll-smooth'
    }: ParentWithClassNamePropTS) {
  return (
    <div className={`crousel ${className}`}>
        {children}
    </div>
  )
}

export default Carousel
