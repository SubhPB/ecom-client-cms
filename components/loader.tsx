// Byimaan

import React from 'react'
import { ClassNamePropTS } from '@/types/components'


function Loader({className='h-12 w-12 border-4 border-transparent border-l-white'}: ClassNamePropTS) {
  return (
    <div className={`loading-animation ${className}`}></div>
  )
};


export default Loader