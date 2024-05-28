// Byimaan

'use client';

import React from 'react';

import { ShoppingCart } from 'lucide-react';

import { useCart } from './shopping-cart';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

function StoreCart() {
    const totalItemsInCart = useCart()?.getAllCartItems()?.length ?? 0;

    const pathname = usePathname();
    const disAppear = pathname === '/cart';

    if (disAppear) return <></>;

    return (
        <Link href={'/cart'} className='px-4 py-2 rounded-2xl bg-black text-white font-semibold text-xs flex items-center gap-2'>
            {<ShoppingCart className='h-4 w-4' />} {totalItemsInCart}
        </Link>
    )
}

export default StoreCart