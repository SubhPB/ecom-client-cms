// Byimaan
import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import NextJsLogo from '@/app/favicon.ico';

import { Menu } from 'lucide-react';

import Navbar from './navbar';  
import { FixHydration } from './providers/fix-hydration';
import StoreCart from './providers/header-cart';


function Header() {
  return (
    <header className='bg-gray-100 flex items-center justify-between py-4 px-2 relative'>
        <Link href={'/'} className="store-logo font-bold text-black text-center text-lg text-wrap flex gap-2">
            <Image src={NextJsLogo} height={25} width={25} alt={'store-logo'}/>
            Store
        </Link>
        <Navbar className='hidden lg:flex lg:max-w-[50%] lg:overflow-x-scroll hide-scrollbar items-center justify-center gap-4'/>

        <div className='nav-side-link flex items-center justify-center gap-2'>
          <StoreCart />
          <Link href={'/menu'} className='text-2xl font-bold lg:hidden' > <Menu /> </Link>
        </div>  
    </header>
  )
};

export default Header