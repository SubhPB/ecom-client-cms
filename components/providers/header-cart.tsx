// Byimaan

'use client';


import { ShoppingCart } from 'lucide-react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from './cart-provider';

function StoreCart() {

    const pathname = usePathname();
    const disAppear = pathname === '/cart';

    const cart = useCart();
    
    if (disAppear) return <></>;

    const totalItemsInCart = cart?.getItems()?.length ?? 0;

    return (
        <Link href={'/cart'} className='px-4 py-2 rounded-2xl bg-black text-white font-semibold text-xs flex items-center gap-2'>
            {<ShoppingCart className='h-4 w-4' />} {totalItemsInCart > 0 && totalItemsInCart}
        </Link>
    )
}

export default StoreCart