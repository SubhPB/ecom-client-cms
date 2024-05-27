//Byimaan

import SomethingWentWrong from '@/components/data-not-found'
import { Timer } from 'lucide-react'
import React from 'react'

export default function ProductsLoading() {
  return (
    <SomethingWentWrong 
        title={
            {
                text: 'Loading...'
            }
        }
        subTitle={
            {
                text: 'Big on sales!'
            }
        }
        icon={<Timer className='h-8 w-8'/>}
    />
  )
};