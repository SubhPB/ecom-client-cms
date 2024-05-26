// Byimaan

import React from 'react';

import { getCategories } from '@/actions/GET/category';

import NavbarLink from './navbar-link';

type NavbarTS =  {
    className: string
}

async function Navbar({className}: NavbarTS) {

  const navLinks = await getCategories();
  return (
    <nav className={className}>
        { navLinks && 
           navLinks.map(
                link => <NavbarLink key={link.id} {...link}/>
           ) 
        }
    </nav>
  )
};
export default Navbar;