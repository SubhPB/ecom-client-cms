// Byimaan

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { getCategories } from '@/actions/GET/category';

import { CategoryTS } from '@/types/app';

type NavbarTS =  {
    className: string
}

async function Navbar({className}: NavbarTS) {

  const navLinks = await getCategories();
  return (
    <nav className={className}>
        { navLinks && 
           navLinks.map(
                link => <NavbarLink key={link.id} isActive={false} {...link}/>
           ) 
        }
    </nav>
  )
};

type NavbarLinkTS = CategoryTS & { isActive: boolean };

function NavbarLink({isActive, id, name, billboard}: NavbarLinkTS){

    const {id: billboardId, label: billboardName, imageUrl: billboardImg} = billboard;

    return (
        <Link 
            href={`/${billboardId}`}
            className={`text-lg font-semibold text-center flex items-center gap-2 ${isActive ? ' text-black ' : ' text-gray-500 '}`}
        >
            <Image src={billboardImg} 
                width={500}
                height={300} 
                quality={100}
                alt={'nav-link'}
                className='rounded-full h-12 w-12 object-center object-cover'
            />
            {name}
        </Link>
    )
};

export default Navbar;