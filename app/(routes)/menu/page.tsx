// Byimaan

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { X } from 'lucide-react'
import { cookies } from 'next/headers'


import NextJsLogo from '@/app/favicon.ico';
import Navbar from '@/components/navbar'

function Menu() {

  let previousUrl = cookies().get('previousUrl')?.value || '/';
  if (previousUrl.includes('/menu')) previousUrl = '/';
  
  return (
    <div className="w-full px-5 py-8 h-[100dvh] overflow-y-scroll hide-scrollbar absolute top-0 left-0 z-20 bg-white">

      <div className="menu-header w-full flex justify-center gap-4 text-2xl font-bold relative border-b-[1px] border-black pb-4">
        <Link href={'/'} className="store-logo font-bold text-black text-center text-lg text-wrap flex gap-2">
            <Image src={NextJsLogo} height={25} width={25} alt={'store-logo'}/>
            Store
        </Link>
        <Link className='absolute z-20 top-0 right-0' href={previousUrl}><X/></Link>
      </div>
      <Navbar className='flex flex-col w-full mt-4 gap-4'/>
    </div>
  )
}

export default Menu