// Byimaan

import React from 'react'

import { ParamsPropTS } from '@/types/components'
import Billboard from '@/components/billboard'

function BillboardPage({params: {billboardId}}: ParamsPropTS) {


    return (
        <div className="billboard w-full">
            <Billboard data={billboardId} />
        </div>
    )
}

export default BillboardPage